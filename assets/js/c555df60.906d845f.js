"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["878474"], {
600886(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_error_use_jsvm_error_md_c55_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-error-use-jsvm-error-md-c55.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_error_use_jsvm_error_md_c55_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-error/use-jsvm-error","title":"使用JSVM-API接口进行错误处理开发","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-error/use-jsvm-error.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-error","slug":"/coding/jsvm/jsvm-use/use-jsvm-error/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-error/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"使用JSVM-API接口进行错误处理开发","sidebar_position":18,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-error","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口获取JSVM API的版本号","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-version/"},"next":{"title":"使用JSVM-API接口进行JavaScript代码调试调优","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/m-heapstatistics-debugger-cpuprofiler-heapsnapshot/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-error/use-jsvm-error.md


const frontMatter = {
	title: '使用JSVM-API接口进行错误处理开发',
	sidebar_position: 18,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-error',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行错误处理开发';

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
  "value": "OH_JSVM_Throw",
  "id": "oh_jsvm_throw",
  "level": 3
}, {
  "value": "OH_JSVM_CreateError",
  "id": "oh_jsvm_createerror",
  "level": 3
}, {
  "value": "OH_JSVM_ThrowError",
  "id": "oh_jsvm_throwerror",
  "level": 3
}, {
  "value": "OH_JSVM_ThrowTypeError",
  "id": "oh_jsvm_throwtypeerror",
  "level": 3
}, {
  "value": "OH_JSVM_ThrowRangeError",
  "id": "oh_jsvm_throwrangeerror",
  "level": 3
}, {
  "value": "OH_JSVM_ThrowSyntaxError",
  "id": "oh_jsvm_throwsyntaxerror",
  "level": 3
}, {
  "value": "OH_JSVM_IsError",
  "id": "oh_jsvm_iserror",
  "level": 3
}, {
  "value": "OH_JSVM_CreateTypeError",
  "id": "oh_jsvm_createtypeerror",
  "level": 3
}, {
  "value": "OH_JSVM_CreateRangeError",
  "id": "oh_jsvm_createrangeerror",
  "level": 3
}, {
  "value": "OH_JSVM_CreateSyntaxError",
  "id": "oh_jsvm_createsyntaxerror",
  "level": 3
}, {
  "value": "OH_JSVM_GetAndClearLastException",
  "id": "oh_jsvm_getandclearlastexception",
  "level": 3
}, {
  "value": "OH_JSVM_IsExceptionPending",
  "id": "oh_jsvm_isexceptionpending",
  "level": 3
}, {
  "value": "OH_JSVM_GetLastErrorInfo",
  "id": "oh_jsvm_getlasterrorinfo",
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
        id: "使用jsvm-api接口进行错误处理开发",
        children: "使用JSVM-API接口进行错误处理开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用JSVM-API接口进行错误处理，可以更好地管理和响应错误情况。合理使用这些函数，可以提高模块的稳定性和可靠性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在JavaScript编程中，异常和错误是常见的概念。异常表示发生了某种意外情况，而错误则指示程序无法正确执行某些操作。JSVM-API提供了一系列方法来帮助开发者在模块中处理JavaScript中的异常和错误。下面是一些基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "异常（Exception）"
          })
        }), "：在程序执行过程中可能会出现的意外情况，可以是语法错误、运行时错误或逻辑错误，例如除以零或对未定义变量的操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "错误（Error）"
          })
        }), "：表示程序无法顺利执行某些操作，可以是由底层系统、API函数或开发者自定义的。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "类型错误（TypeError）"
          })
        }), "：表示操作或值的类型不符合预期的情况，通常是由于错误的数据类型导致的。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "范围错误（RangeError）"
          })
        }), "：表示一个值不在预期的范围内，例如对数组长度之外的索引进行访问。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "语法错误（SyntaxError）"
          })
        }), "：表示一段代码的语法错误。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这些基本概念在异常和错误处理中非常重要，开发者需要通过适当的方法来捕获、处理或向用户报告这些异常和错误，以确保程序的稳定性和正确性。JSVM-API提供的方法可以帮助开发者在模块开发中处理JavaScript中的异常和错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_CreateError、OH_JSVM_CreateTypeError、OH_JSVM_CreateRangeError、OH_JSVM_CreateSyntaxError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在C/C++中需要创建一个错误对象时，可以使用这些函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_Throw"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当在C/C++中出现了错误或异常情况时，通过使用OH_JSVM_CreateError或OH_JSVM_GetLastErrorInfo方法创建或获取JavaScript Error对象，使用该方法抛出已有的JavaScript Error对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ThrowError、OH_JSVM_ThrowTypeError、OH_JSVM_ThrowRangeError、OH_JSVM_ThrowSyntaxError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当在C/C++中出现了错误或异常情况时，可以使用这些函数来抛出JavaScript中的异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsError"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询JSVM_Value以检查它是否表示错误对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetAndClearLastException"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "清理并返回最后一个JS异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsExceptionPending"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断当前是否有异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetLastErrorInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取最后一次发生的错误信息。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JSVM-API接口开发流程可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/use-jsvm-process",
        children: "使用JSVM-API实现JS与C/C++语言交互开发流程"
      }), "，本文仅展示接口对应的C++相关代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_throw",
      children: "OH_JSVM_Throw"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于抛出JavaScript Error对象。当在本机代码中发生错误或检测到不符合预期的情况时，可以使用此接口来抛出JavaScript Error，使其能够被捕获并处理。示例参考OH_JSVM_CreateError。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createerror",
      children: "OH_JSVM_CreateError"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并获取一个带文本信息的JavaScript Error。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n// 捕获清除并打印错误，该函数作为公共函数，在本文档后续样例中不再声明和定义\nstatic void GetLastErrorAndClean(JSVM_Env env) {\n    // 调用OH_JSVM_GetAndClearLastException接口获取并清除最后一个未处理的异常。即使存在挂起的JavaScript异常，也可以调用此API\n    JSVM_Value result = nullptr;\n    JSVM_Status status = OH_JSVM_GetAndClearLastException(env, &result);\n    // 打印错误信息\n    JSVM_Value message = nullptr;\n    JSVM_Value errorCode = nullptr;\n    OH_JSVM_GetNamedProperty((env), result, \"message\", &message);\n    OH_JSVM_GetNamedProperty((env), result, \"code\", &errorCode);\n    char messageStr[256];\n    char codeStr[256];\n    OH_JSVM_GetValueStringUtf8(env, message, messageStr, 256, nullptr);\n    OH_JSVM_GetValueStringUtf8(env, errorCode, codeStr, 256, nullptr);\n    OH_LOG_INFO(LOG_APP, \"JSVM error message: %{public}s, error code: %{public}s\", messageStr, codeStr);\n}\n\n// OH_JSVM_CreateError的样例方法\nstatic JSVM_Value JsVmCreateThrowError(JSVM_Env env, JSVM_CallbackInfo info) {\n    // 在JSVM环境中创建一个字符串，并将其存储在errorCode变量中\n    JSVM_Value errorCode = nullptr;\n    OH_JSVM_CreateStringUtf8(env, \"-1\", JSVM_AUTO_LENGTH, &errorCode);\n    // 在JSVM环境中创建一个字符串，并将其存储在errorMessage变量中\n    JSVM_Value errorMessage = nullptr;\n    OH_JSVM_CreateStringUtf8(env, \"HasError\", JSVM_AUTO_LENGTH, &errorMessage);\n    // 创建一个JavaScript对象error\n    JSVM_Value error = nullptr;\n    OH_JSVM_CreateError(env, errorCode, errorMessage, &error);\n    // 通过OH_JSVM_Throw接口将对象抛出\n    OH_JSVM_Throw(env, error);\n    GetLastErrorAndClean(env);\n    return nullptr;\n}\n\n// JsVmThrow注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = JsVmCreateThrowError},\n};\nstatic JSVM_CallbackStruct *method = param;\n// JsVmCreateThrowError方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"jsVmCreateThrowError\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(jsVmCreateThrowError();)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM error message: HasError, error code: -1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_throwerror",
      children: "OH_JSVM_ThrowError"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于抛出一个带文本信息的JS Error。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n// OH_JSVM_ThrowError的样例方法\nstatic JSVM_Value JsVmThrowError(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value argv[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, argv, nullptr, nullptr);\n    if (argc == 0) {\n        // 如果没有传递参数，直接抛出错误\n        OH_JSVM_ThrowError(env, \"-1\", \"has Error\");\n    } else if (argc == 1) {\n        size_t length = 0;\n        // 通过入参获取到JavaScript侧传入的字符串长度。\n        OH_JSVM_GetValueStringUtf8(env, argv[0], nullptr, 0, &length);\n        char *buffer = new char[length + 1];\n        // 获取入参的字符串内容。\n        OH_JSVM_GetValueStringUtf8(env, argv[0], buffer, length + 1, nullptr);\n        // 作为error信息填入到OH_JSVM_ThrowError接口中。\n        OH_JSVM_ThrowError(env, \"self defined error code\", buffer);\n        delete[] buffer;\n    }\n    GetLastErrorAndClean(env);\n    return nullptr;\n}\n// JsVmThrowError注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = JsVmThrowError},\n};\nstatic JSVM_CallbackStruct *method = param;\n// JsVmThrowError方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"jsVmThrowError\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(jsVmThrowError();jsVmThrowError(\"self defined error message\");)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM error message: has Error, error code: -1\nJSVM error message: self defined error message, error code: self defined error code\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_throwtypeerror",
      children: "OH_JSVM_ThrowTypeError"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并获取一个带文本信息的JavaScript TypeError。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n// OH_JSVM_ThrowTypeError的样例方法\nstatic JSVM_Value JsVmThrowTypeError(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 1;\n    JSVM_Value argv[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, argv, nullptr, nullptr);\n    if (argc == 0) {\n        // 如果没有传递参数，直接抛出错误\n        OH_JSVM_ThrowTypeError(env, \"-1\", \"throwing type error\");\n    } else if (argc == 1) {\n        size_t length = 0;\n        // 通过入参获取到javaScript侧传入的字符串长度\n        OH_JSVM_GetValueStringUtf8(env, argv[0], nullptr, 0, &length);\n        char *buffer = new char[length + 1];\n        // 获取入参的字符串内容\n        OH_JSVM_GetValueStringUtf8(env, argv[0], buffer, length + 1, nullptr);\n        // 作为error信息填入到OH_JSVM_ThrowTypeError接口中\n        OH_JSVM_ThrowTypeError(env, \"self defined error code\", buffer);\n        delete[] buffer;\n    }\n    GetLastErrorAndClean(env);\n    return nullptr;\n}\n// JsVmThrowTypeError注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = JsVmThrowTypeError},\n};\nstatic JSVM_CallbackStruct *method = param;\n// JsVmThrowTypeError方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"jsVmThrowTypeError\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(jsVmThrowTypeError();jsVmThrowTypeError(\"self defined error message\");)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM error message: throwing type error, error code: -1\nJSVM error message: self defined error message, error code: self defined error code\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_throwrangeerror",
      children: "OH_JSVM_ThrowRangeError"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并获取一个带文本信息的JavaScript RangeError。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n// OH_JSVM_ThrowRangeError的样例方法\nstatic JSVM_Value JsVmThrowRangeError(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // js侧传入两个参数\n    size_t argc = 2;\n    JSVM_Value argv[2] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, argv, nullptr, nullptr);\n    // 如果传入参数个数不为2\n    if (argc != 2) {\n        // 这里抛出一个RangeError\n        OH_JSVM_ThrowRangeError(env, \"OH_JSVM_ThrowRangeError\", \"Expected two numbers as arguments\");\n        GetLastErrorAndClean(env);\n        return nullptr;\n    }\n    JSVM_Value result = nullptr;\n    OH_JSVM_GetBoolean(env, true, &result);\n    return result;\n}\n// JsVmThrowRangeError注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = JsVmThrowRangeError},\n};\nstatic JSVM_CallbackStruct *method = param;\n// JsVmThrowRangeError方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"jsVmThrowRangeError\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(jsVmThrowRangeError(1);)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM error message: Expected two numbers as arguments, error code: OH_JSVM_ThrowRangeError\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_throwsyntaxerror",
      children: "OH_JSVM_ThrowSyntaxError"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并获取一个带文本信息的JavaScript SyntaxError。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n// OH_JSVM_ThrowSyntaxError的样例方法\nstatic JSVM_Value JsVmThrowSyntaxError(JSVM_Env env, JSVM_CallbackInfo info) {\n    // JS侧传入运行的JS代码\n    size_t argc = 1;\n    JSVM_Value argv[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, argv, nullptr, nullptr);\n    JSVM_Script script = nullptr;\n    // 通过OH_JSVM_CompileScript接口编译JS代码\n    OH_JSVM_CompileScript(env, argv[0], nullptr, 0, true, nullptr, &script);\n    JSVM_Value scriptResult = nullptr;\n    // 通过OH_JSVM_RunScript接口运行JS代码\n    JSVM_Status status = OH_JSVM_RunScript(env, script, &scriptResult);\n    if (status != JSVM_OK) {\n        // 如果JSVM_RunScript接口返回状态不为JSVM_OK，则抛出一个SyntaxError\n        OH_JSVM_ThrowSyntaxError(env, \"JsVmThrowSyntaxError\", \"throw syntax error\");\n        GetLastErrorAndClean(env);\n        return nullptr;\n    }\n    JSVM_Value result = nullptr;\n    OH_JSVM_GetBoolean(env, true, &result);\n    return result;\n}\n// JsVmThrowSyntaxError注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = JsVmThrowSyntaxError},\n};\nstatic JSVM_CallbackStruct *method = param;\n// JsVmThrowSyntaxError方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"jsVmThrowSyntaxError\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(jsVmThrowSyntaxError();)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM error message: throw syntax error, error code: JsVmThrowSyntaxError\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_iserror",
      children: "OH_JSVM_IsError"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于判断给定的JSVM_Value是否表示一个Error对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n// OH_JSVM_IsError的样例方法\nstatic JSVM_Value JsVmIsError(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 调用接口OH_JSVM_IsError判断入参是否为一个error对象\n    bool result = false;\n    // 如果JSVM_Value为一个error对象，则设置result为true的布尔值，否则设置为false\n    JSVM_Status status = OH_JSVM_IsError(env, args[0], &result);\n    if (status == JSVM_OK) {\n        OH_LOG_INFO(LOG_APP, \"JSVM API call OH_JSVM_IsError success, result is %{public}d\", result);\n    }else {\n        OH_LOG_INFO(LOG_APP, \"JSVM API call OH_JSVM_IsError failed\");\n    }\n    // 取出result通过OH_JSVM_GetBoolean接口将取出的bool值转换为JSVM_Value类型的值返回出去\n    JSVM_Value returnValue = nullptr;\n    OH_JSVM_GetBoolean(env, result, &returnValue);\n    return returnValue;\n}\n// JsVmIsError注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = JsVmIsError},\n};\nstatic JSVM_CallbackStruct *method = param;\n// JsVmIsError方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"jsVmIsError\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(jsVmIsError(Error()))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM API call OH_JSVM_IsError success, result is 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createtypeerror",
      children: "OH_JSVM_CreateTypeError"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并获取一个带文本信息的JavaScript TypeError。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n// OH_JSVM_CreateTypeError的样例方法\nstatic JSVM_Value JsVmCreateTypeError(JSVM_Env env, JSVM_CallbackInfo info) {\n    // 在JSVM环境中创建一个字符串，并将其存储在errorCode变量中\n    JSVM_Value errorCode = nullptr;\n    OH_JSVM_CreateStringUtf8(env, \"-1\", JSVM_AUTO_LENGTH, &errorCode);\n    // 在JSVM环境中创建一个字符串，并将其存储在errorMessage变量中\n    JSVM_Value errorMessage = nullptr;\n    OH_JSVM_CreateStringUtf8(env, \"HasError\", JSVM_AUTO_LENGTH, &errorMessage);\n    JSVM_Value result = nullptr;\n    JSVM_Status status = OH_JSVM_CreateTypeError(env, errorCode, errorMessage, &result);\n    if (status == JSVM_OK) {\n        OH_LOG_INFO(LOG_APP, \"JSVM API Create TypeError SUCCESS\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM API Create TypeError FAILED\");\n    }\n    return result;\n}\n// JsVmCreateTypeError注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = JsVmCreateTypeError},\n};\nstatic JSVM_CallbackStruct *method = param;\n// JsVmCreateTypeError方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"jsVmCreateTypeError\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(jsVmCreateTypeError();)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM API Create TypeError SUCCESS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createrangeerror",
      children: "OH_JSVM_CreateRangeError"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建并获取一个带文本信息的JavaScript RangeError。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n// OH_JSVM_CreateRangeError的样例方法\nstatic JSVM_Value JsVmCreateRangeError(JSVM_Env env, JSVM_CallbackInfo info) {\n    // 在JSVM环境中创建一个字符串，并将其存储在errorCode变量中\n    JSVM_Value errorCode = nullptr;\n    OH_JSVM_CreateStringUtf8(env, \"-1\", JSVM_AUTO_LENGTH, &errorCode);\n    // 在JSVM环境中创建一个字符串，并将其存储在errorMessage变量中\n    JSVM_Value errorMessage = nullptr;\n    OH_JSVM_CreateStringUtf8(env, \"HasError\", JSVM_AUTO_LENGTH, &errorMessage);\n    JSVM_Value result = nullptr;\n    JSVM_Status status = OH_JSVM_CreateRangeError(env, errorCode, errorMessage, &result);\n    if (status == JSVM_OK) {\n        OH_LOG_INFO(LOG_APP, \"JSVM API CreateRangeError SUCCESS\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM API CreateRangeError FAILED\");\n    }\n    return result;\n}\n// JsVmCreateRangeError注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = JsVmCreateRangeError},\n};\nstatic JSVM_CallbackStruct *method = param;\n// JsVmCreateRangeError方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"jsVmCreateRangeError\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(jsVmCreateRangeError();)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM API CreateRangeError SUCCESS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createsyntaxerror",
      children: "OH_JSVM_CreateSyntaxError"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于创建并获取一个带文本信息的JavaScript SyntaxError。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n// OH_JSVM_CreateSyntaxError的样例方法\nstatic JSVM_Value JsVmCreateSyntaxError(JSVM_Env env, JSVM_CallbackInfo info) {\n    // 在JSVM环境中创建一个字符串，并将其存储在errorCode变量中\n    JSVM_Value errorCode = nullptr;\n    OH_JSVM_CreateStringUtf8(env, \"-1\", JSVM_AUTO_LENGTH, &errorCode);\n    // 在JSVM环境中创建一个字符串，并将其存储在errorMessage变量中\n    JSVM_Value errorMessage = nullptr;\n    OH_JSVM_CreateStringUtf8(env, \"HasError\", JSVM_AUTO_LENGTH, &errorMessage);\n    JSVM_Value result = nullptr;\n    JSVM_Status status =  OH_JSVM_CreateSyntaxError(env, errorCode, errorMessage, &result);\n    if (status == JSVM_OK) {\n        OH_LOG_INFO(LOG_APP, \"JSVM API CreateSyntaxError SUCCESS\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM API CreateSyntaxError FAILED\");\n    }\n    return result;\n}\n// JsVmCreateSyntaxError注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = JsVmCreateSyntaxError},\n};\nstatic JSVM_CallbackStruct *method = param;\n// JsVmCreateSyntaxError方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"jsVmCreateSyntaxError\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(jsVmCreateSyntaxError();)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM API CreateSyntaxError SUCCESS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getandclearlastexception",
      children: "OH_JSVM_GetAndClearLastException"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取并清除最近一次出现的异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n// OH_JSVM_GetAndClearLastException的样例方法\nstatic JSVM_Value JsVmGetAndClearLastException(JSVM_Env env, JSVM_CallbackInfo info) {\n    // 抛出异常，创造异常情况\n    OH_JSVM_ThrowError(env, \"OH_JSVM_ThrowError errorCode\", \"OH_JSVM_ThrowError errorMessage\");\n    // 调用OH_JSVM_GetAndClearLastException接口获取并清除最后一个未处理的异常。即使存在挂起的JavaScript异常，也可以调用此API\n    JSVM_Value result = nullptr;\n    JSVM_Status status = OH_JSVM_GetAndClearLastException(env, &result);\n    if (status != JSVM_OK) {\n        OH_LOG_INFO(LOG_APP, \"JSVM API OH_JSVM_GetAndClearLastException FAILED\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM API OH_JSVM_GetAndClearLastException SUCCESS\");\n    }\n    return result;\n}\n// JsVmGetAndClearLastException注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = JsVmGetAndClearLastException},\n};\nstatic JSVM_CallbackStruct *method = param;\n// JsVmGetAndClearLastException方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"jsVmGetAndClearLastException\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(jsVmGetAndClearLastException();)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM API OH_JSVM_GetAndClearLastException SUCCESS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_isexceptionpending",
      children: "OH_JSVM_IsExceptionPending"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于判断是否出现了异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n// OH_JSVM_IsExceptionPending的样例方法\nstatic JSVM_Value JsVmIsExceptionPending(JSVM_Env env, JSVM_CallbackInfo info) {\n    JSVM_Status status;\n    bool isExceptionPending = false;\n    // 在执行一些可能引发异常的操作后\n    OH_JSVM_ThrowError(env, \"OH_JSVM_ThrowError errorCode\", \"OH_JSVM_ThrowError errorMessage\");\n    // 检查当前环境中是否有异常挂起\n    status = OH_JSVM_IsExceptionPending(env, &isExceptionPending);\n    if (status != JSVM_OK) {\n        return nullptr;\n    }\n    if (isExceptionPending) {\n        OH_LOG_INFO(LOG_APP, \"JSVM API OH_JSVM_IsExceptionPending: SUCCESS\");\n        // 处理异常挂起的情况\n        JSVM_Value result = nullptr;\n        status = OH_JSVM_GetAndClearLastException(env, &result);\n        if (status != JSVM_OK) {\n            return nullptr;\n        }\n        // 将处理的异常返回出去\n        return result;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM API OH_JSVM_IsExceptionPending: FAILED\");\n    }\n    return nullptr;\n}\n// JsVmIsExceptionPending注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = JsVmIsExceptionPending},\n};\nstatic JSVM_CallbackStruct *method = param;\n// JsVmIsExceptionPending方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"jsVmIsExceptionPending\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(jsVmIsExceptionPending();)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM API OH_JSVM_IsExceptionPending: SUCCESS\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getlasterrorinfo",
      children: "OH_JSVM_GetLastErrorInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取调用JSVM接口最后一次发生的错误信息（接口返回值不为JSVM_OK），包括错误码、错误消息以及错误堆栈信息，即使存在挂起的JavaScript异常，也可以调用此API。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意: 通过OH_JSVM_ThrowError等接口主动触发的Error不会被该接口获取，除非调用接口时返回值不为JSVM_OK。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n// OH_JSVM_GetLastErrorInfo的样例方法\nstatic JSVM_Value JsVmGetLastErrorInfo(JSVM_Env env, JSVM_CallbackInfo info) {\n    // 获取输入参数（这里以字符串message作为参数传入）\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 将传入的字符串参数以OH_JSVM_GetValueInt32取出，主动制造错误\n    int32_t value = 0;\n    OH_JSVM_GetValueInt32(env, args[0], &value);\n    // 调用接口OH_JSVM_GetLastErrorInfo获取最后一次错误信息\n    const JSVM_ExtendedErrorInfo *errorInfo;\n    OH_JSVM_GetLastErrorInfo(env, &errorInfo);\n\n    // 取出错误消息作为返回值带出去打印\n    JSVM_Value result = nullptr;\n    OH_LOG_INFO(LOG_APP,\n                \"JSVM API OH_JSVM_GetLastErrorInfo: SUCCESS, error message is %{public}s, error code is %{public}d\",\n                errorInfo->errorMessage, errorInfo->errorCode);\n    // 对异常进行处理，防止程序由于抛异常而退出\n    JSVM_Value result1 = nullptr;\n    OH_JSVM_GetAndClearLastException(env, &result1);\n    OH_JSVM_CreateInt32(env, errorInfo->errorCode, &result);\n    return result;\n}\n// JsVmGetLastErrorInfo注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = JsVmGetLastErrorInfo},\n};\nstatic JSVM_CallbackStruct *method = param;\n// JsVmGetLastErrorInfo方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"jsVmGetLastErrorInfo\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(jsVmGetLastErrorInfo();)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM API OH_JSVM_GetLastErrorInfo: SUCCESS, error message is A number was expected, error code is 6\n"
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