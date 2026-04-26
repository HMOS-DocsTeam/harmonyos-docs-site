"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["770083"], {
889670(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_basic_data_types_use_jsvm_basic_data_types_md_4cc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-basic-data-types-use-jsvm-basic-data-types-md-4cc.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_basic_data_types_use_jsvm_basic_data_types_md_4cc_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-basic-data-types/use-jsvm-basic-data-types","title":"使用JSVM-API接口创建和获取数值","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-basic-data-types/use-jsvm-basic-data-types.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-basic-data-types","slug":"/coding/jsvm/jsvm-use/use-jsvm-basic-data-types/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-basic-data-types/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"title":"使用JSVM-API接口创建和获取数值","sidebar_position":30,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-basic-data-types","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行Wrapper object相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-wrapper-object/"},"next":{"title":"JSVM-API调试&定位","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-scenarios/jsvm-debugger-cpuprofiler-heapsnapshot/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-basic-data-types/use-jsvm-basic-data-types.md


const frontMatter = {
	title: '使用JSVM-API接口创建和获取数值',
	sidebar_position: 30,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-basic-data-types',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口创建和获取数值';

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
  "value": "OH_JSVM_GetValueUint32",
  "id": "oh_jsvm_getvalueuint32",
  "level": 3
}, {
  "value": "OH_JSVM_GetValueInt32",
  "id": "oh_jsvm_getvalueint32",
  "level": 3
}, {
  "value": "OH_JSVM_GetValueInt64",
  "id": "oh_jsvm_getvalueint64",
  "level": 3
}, {
  "value": "OH_JSVM_GetValueDouble",
  "id": "oh_jsvm_getvaluedouble",
  "level": 3
}, {
  "value": "OH_JSVM_CreateInt32",
  "id": "oh_jsvm_createint32",
  "level": 3
}, {
  "value": "OH_JSVM_CreateUint32",
  "id": "oh_jsvm_createuint32",
  "level": 3
}, {
  "value": "OH_JSVM_CreateInt64",
  "id": "oh_jsvm_createint64",
  "level": 3
}, {
  "value": "OH_JSVM_CreateDouble",
  "id": "oh_jsvm_createdouble",
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
        id: "使用jsvm-api接口创建和获取数值",
        children: "使用JSVM-API接口创建和获取数值"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在JavaScript中，整数类型是一种基本数据类型，用于表示没有小数部分的数值。Double类型用于表示有小数的数值。JavaScript的数值存储方式会导致在某些情况下无法准确表示非常大或非常小的数值，在这种情况下，需要使用BigInt对应的JSVM-API接口来处理更大范围的整数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用JSVM-API接口进行数值类型的创建和获取时，需要了解以下基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "数值类型"
          })
        }), " 在使用JSVM-API接口时，可能需要从JSVM模块数值类型转换为JavaScript数值类型，或者从JavaScript数值类型转换为JSVM模块数值类型。在进行数据类型转换时，需要注意数据范围是否匹配，以及有无符号整数和双精度数值等区别。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "错误处理"
          })
        }), " 在使用这些接口时，需要对可能发生的错误进行适当处理。例如，在创建整数值时可能发生内存分配错误或其他运行时错误，需要使用JSVM-API提供的错误处理机制来捕获并处理这些错误。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "JavaScript交互"
          })
        }), " 在开发过程中，需要考虑如何将创建的数值类型值与JavaScript环境进行交互，包括传递参数、返回值等。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_GetValueUint32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JavaScript number的Uint32基础类型值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueInt32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JavaScript number的Int32基础类型值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueInt64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JavaScript number的Int64基础类型值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueDouble"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JavaScript number的Double基础类型值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateInt32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Int32_t类型对象创建JavaScript number对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateUint32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Uint32_t类型对象创建JavaScript number对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateInt64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Int64_t类型对象创建JavaScript number对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateDouble"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据Double类型对象创建JavaScript number对象。"
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
      id: "oh_jsvm_getvalueuint32",
      children: "OH_JSVM_GetValueUint32"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将JavaScript value转为JSVM模块中的uint32类型数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n\n// OH_JSVM_GetValueUint32的样例方法\nstatic JSVM_Value GetValueUint32(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获取传入的数字类型参数\n    size_t argc = 1;\n    JSVM_Value argv[1] = {nullptr};\n    // 解析传入的参数\n    OH_JSVM_GetCbInfo(env, info, &argc, argv, nullptr, nullptr);\n    uint32_t number = 0;\n    // 获取传入参数的值中的无符号32位整数\n    JSVM_Status status = OH_JSVM_GetValueUint32(env, argv[0], &number);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM GetValueUint32 fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM GetValueUint32 success: %{public}u\", number);\n    }\n    return argv[0];\n}\n\n// GetValueUint32注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetValueUint32},\n};\nstatic JSVM_CallbackStruct *method = param;\n\n// GetValueUint32方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getValueUint32\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char* srcCallNative = R\"JS(getValueUint32(123))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM GetValueUint32 success: 123\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getvalueint32",
      children: "OH_JSVM_GetValueInt32"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将JavaScript value转为JSVM模块中的Int32类型数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n\n// OH_JSVM_GetValueInt32的样例方法\nstatic JSVM_Value GetValueInt32(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    int32_t result32 = 0;\n    // 解析传递的参数\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 将前端传过来的参数转为JSVM模块的int32类型\n    JSVM_Status status = OH_JSVM_GetValueInt32(env, args[0], &result32);\n    if (status != JSVM_OK) {\n        return nullptr;\n    }\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM GetValueInt32 fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM GetValueInt32 success: %{public}d\", result32);\n    }\n    return args[0];\n}\n\n// GetValueInt32注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetValueInt32},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetValueInt32方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getValueInt32\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char* srcCallNative = R\"JS(getValueInt32(-123))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM GetValueInt32 success: -123\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getvalueint64",
      children: "OH_JSVM_GetValueInt64"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将JavaScript value转为JSVM模块中的Int64类型数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n\n// OH_JSVM_GetValueInt64的样例方法\nstatic JSVM_Value GetValueInt64(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    int64_t result64 = 0;\n    // 解析传递的值\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 将前端传过来的参数分别转为JSVM模块的int64类型\n    JSVM_Status status = OH_JSVM_GetValueInt64(env, args[0], &result64);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM GetValueInt64 fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM GetValueInt64 success: %{public}ld\", result64);\n    }\n    return args[0];\n}\n\n// GetValueInt64注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetValueInt64},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetValueInt64方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getValueInt64\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char* srcCallNative = R\"JS(getValueInt64(-123))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM GetValueInt64 success: -123\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getvaluedouble",
      children: "OH_JSVM_GetValueDouble"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将JavaScript value转为JSVM模块中的double类型数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n\n// OH_JSVM_GetValueDouble的样例方法\nstatic JSVM_Value GetDouble(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    double value = 0;\n    JSVM_Status status = OH_JSVM_GetValueDouble(env, args[0], &value);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM GetDouble fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM GetDouble success: %{public}f\", value);\n    }\n    return args[0];\n}\n\n// GetDouble注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetDouble},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetDouble方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getDouble\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char* srcCallNative = R\"JS(getDouble(-110.0456))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM GetDouble success: -110.045600\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createint32",
      children: "OH_JSVM_CreateInt32"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据int32_t数据创建JavaScript number对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n\n// OH_JSVM_CreateInt32的样例方法\nstatic JSVM_Value CreateInt32(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    int32_t value = -20;\n    // 创建JavaScript中的int32数字\n    JSVM_Value result = nullptr;\n    JSVM_Status status = OH_JSVM_CreateInt32(env, value, &result);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM CreateInt32 fail\");\n    } else {\n        int32_t number = 0;\n        OH_JSVM_GetValueInt32(env, result, &number);\n        OH_LOG_INFO(LOG_APP, \"JSVM CreateInt32 success: %{public}d\", number);\n    }\n    return result;\n}\n\n// CreateInt32注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateInt32},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateInt32方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createInt32\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char* srcCallNative = R\"JS(createInt32())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM CreateInt32 success: -20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createuint32",
      children: "OH_JSVM_CreateUint32"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据uint32_t数据创建JavaScript number对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n\n// OH_JSVM_CreateUint32的样例方法\nstatic JSVM_Value CreateUInt32(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 如果使用\n    // uint32_t类型来定义-26，会发生溢出，溢出时会对结果进行模运算，将负数的二进制补码转换为相应的正数。-26输出4294967270\n    // uint32_t是无符号的32位整数类型，只能表示非负整数。它的范围是从0到2 ^32 - 1，即0到4294967295\n    // 要表示的整数值\n    uint32_t value = 26;\n    // 创建JavaScript中的uint32数字\n    JSVM_Value result = nullptr;\n    JSVM_Status status = OH_JSVM_CreateUint32(env, value, &result);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM CreateUInt32 fail\");\n    } else {\n        uint32_t number = 0;\n        OH_JSVM_GetValueUint32(env, result, &number);\n        OH_LOG_INFO(LOG_APP, \"JSVM CreateUInt32 success: %{public}u\", number);\n    }\n    return result;\n}\n\n// CreateUInt32注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateUInt32},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateUInt32方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createUInt32\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char* srcCallNative = R\"JS(createUInt32())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM CreateUInt32 success: 26\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createint64",
      children: "OH_JSVM_CreateInt64"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据int64_t数据创建JavaScript number对象。如果需要表示JS超大数，建议使用BigInt接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n\n// OH_JSVM_CreateInt64的样例方法\nstatic JSVM_Value CreateInt64(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    int64_t value = 2147483648;\n    // 创建JavaScript中的int64数字\n    JSVM_Value result = nullptr;\n    JSVM_Status status = OH_JSVM_CreateInt64(env, value, &result);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM CreateInt64 fail\");\n    } else {\n        int64_t number = 0;\n        OH_JSVM_GetValueInt64(env, result, &number);\n        OH_LOG_INFO(LOG_APP, \"JSVM CreateInt64 success: %{public}ld\", number);\n    }\n    return result;\n}\n\n// CreateInt64注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateInt64},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateInt64方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createInt64\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char* srcCallNative = R\"JS(createInt64())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM CreateInt64 success: 2147483648\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createdouble",
      children: "OH_JSVM_CreateDouble"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据double数据创建JavaScript number对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// CreateDouble注册回调\n\n// OH_JSVM_CreateDouble的样例方法\nstatic JSVM_Value CreateDouble(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    double value = 1.234;\n    // 创建JavaScript中的double数字\n    JSVM_Value result = nullptr;\n    JSVM_Status status = OH_JSVM_CreateDouble(env, value, &result);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM CreateDouble fail\");\n    } else {\n        double number = 0;\n        OH_JSVM_GetValueDouble(env, result, &number);\n        OH_LOG_INFO(LOG_APP, \"JSVM CreateDouble success: %{public}f\", number);\n    }\n    return result;\n}\n\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateDouble},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateDouble方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createDouble\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char* srcCallNative = R\"JS(createDouble())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM CreateDouble success: 1.234000\n"
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