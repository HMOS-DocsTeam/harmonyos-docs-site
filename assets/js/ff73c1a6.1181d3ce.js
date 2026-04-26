"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["877173"], {
486351(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_bigint_use_jsvm_about_bigint_md_ff7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-bigint-use-jsvm-about-bigint-md-ff7.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_bigint_use_jsvm_about_bigint_md_ff7_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-bigint/use-jsvm-about-bigint","title":"使用JSVM-API接口操作bigint类型值","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-bigint/use-jsvm-about-bigint.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-bigint","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-bigint/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-bigint/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"使用JSVM-API接口操作bigint类型值","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-bigint","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行ArrayBuffer相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-arraybuffer/"},"next":{"title":"使用JSVM-API接口进行class相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-class/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-bigint/use-jsvm-about-bigint.md


const frontMatter = {
	title: '使用JSVM-API接口操作bigint类型值',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-bigint',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口操作bigint类型值';

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
  "value": "OH_JSVM_GetValueBigintWords",
  "id": "oh_jsvm_getvaluebigintwords",
  "level": 3
}, {
  "value": "OH_JSVM_CreateBigintWords",
  "id": "oh_jsvm_createbigintwords",
  "level": 3
}, {
  "value": "OH_JSVM_CreateBigintUint64",
  "id": "oh_jsvm_createbigintuint64",
  "level": 3
}, {
  "value": "OH_JSVM_GetValueBigintUint64",
  "id": "oh_jsvm_getvaluebigintuint64",
  "level": 3
}, {
  "value": "OH_JSVM_CreateBigintInt64",
  "id": "oh_jsvm_createbigintint64",
  "level": 3
}, {
  "value": "OH_JSVM_GetValueBigintInt64",
  "id": "oh_jsvm_getvaluebigintint64",
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
        id: "使用jsvm-api接口操作bigint类型值",
        children: "使用JSVM-API接口操作bigint类型值"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BigInt是JavaScript中用于表示任意精度整数的数据类型，能够处理比Number类型更大范围的整数值。JSVM-API提供的接口支持在JSVM模块中创建、获取和操作BigInt类型值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用JSVM-API接口操作BigInt类型值需要理解以下基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "BigInt类型："
          })
        }), " BigInt是JavaScript中的一种数据类型，用于表示任意精度的整数。与Number类型不同，BigInt类型可以精确表示非常大的整数，而不会丢失精度或溢出。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "BigInt创建："
          })
        }), " 使用JSVM-API提供的接口，可以通过传递C的int64或uint64数据来创建对应的JavaScript BigInt。这使得在JSVM模块中可以方便地创建BigInt类型值。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "BigInt操作："
          })
        }), " JSVM-API提供了多个接口用于操作BigInt类型值。通过这些接口，可以获取BigInt的数值，进行数值转换，以及执行常见的算术和位运算操作。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_CreateBigintInt64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将C int64_t类型的值转换为JavaScript BigInt类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateBigintUint64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将C uint64_t类型的值转换为JavaScript BigInt类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateBigintWords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将一组无符号64位字转换为单个BigInt值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueBigintInt64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回给定JavaScript BigInt的C int64_t基础类型等价值。 如果需要，它将截断该值，将lossless设置为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueBigintUint64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回给定JavaScript BigInt的C uint64_t基础类型等价值。 如果需要，它将截断该值，将lossless设置为false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueBigintWords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将单个BigInt值转换为一个符号位、一个64位的小端数组和该数组的长度。 signBit和words参数可以都设置为NULL，这种情况下，只获取wordCount。"
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
      }), "。本文仅展示接口对应的C++及ArkTS相关代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getvaluebigintwords",
      children: "OH_JSVM_GetValueBigintWords"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取给定JavaScript BigInt对象的底层数据，即BigInt数据的字词表示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n#include <fstream>\n\n// OH_JSVM_GetValueBigintWords的样例方法\nstatic JSVM_Value GetValueBigintWords(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    int signBit = 0;\n    size_t wordCount = 0;\n    uint64_t* words{nullptr};\n    // 调用OH_JSVM_GetValueBigintWords接口获取wordCount\n    JSVM_Status status = OH_JSVM_GetValueBigintWords(env, args[0], nullptr, &wordCount, nullptr);\n    OH_LOG_INFO(LOG_APP, \"OH_JSVM_GetValueBigintWords wordCount:%{public}d.\", wordCount);\n    words = (uint64_t*)malloc(wordCount*sizeof(uint64_t));\n    if (words == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"OH_JSVM_GetValueBigintWords malloc failed.\");\n        return nullptr;\n    }\n    // 调用OH_JSVM_GetValueBigintWords接口获取传入bigInt相关信息，如：signBit传入bigInt正负信息\n    status = OH_JSVM_GetValueBigintWords(env, args[0], &signBit, &wordCount, words);\n    free(words);\n    words = nullptr;\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"OH_JSVM_GetValueBigintWords fail, status:%{public}d.\", status);\n    } else {\n        OH_LOG_INFO(LOG_APP, \"OH_JSVM_GetValueBigintWords signBit: %{public}d.\", signBit);\n    }\n    // 将符号位转化为int类型传出去\n    JSVM_Value returnValue = nullptr;\n    OH_JSVM_CreateInt32(env, signBit, &returnValue);\n    return returnValue;\n}\n// GetValueBigintWords注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetValueBigintWords},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetValueBigintWords方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getValueBigintWords\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char* srcCallNative = R\"JS(getValueBigintWords(BigInt(5555555555555555)))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "OH_JSVM_GetValueBigintWords wordCount:1.\nOH_JSVM_GetValueBigintWords signBit: 0.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createbigintwords",
      children: "OH_JSVM_CreateBigintWords"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据给定的uint64_t数组创建一个JavaScript BigInt对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_CreateBigintWords的样例方法\nstatic int DIFF_VALUE_THREE = 3;\nstatic JSVM_Value CreateBigintWords(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 使用OH_JSVM_CreateBigintWords接口创建一个BigInt对象\n    int signBit = 0;\n    size_t wordCount = DIFF_VALUE_THREE;\n    uint64_t words[] = {12ULL, 34ULL, 56ULL};\n    JSVM_Value returnValue = nullptr;\n    JSVM_Status status = OH_JSVM_CreateBigintWords(env, signBit, wordCount, words, &returnValue);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_CreateBigintWords fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_CreateBigintWords success\");\n    }\n    return returnValue;\n}\n// CreateBigintWords注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateBigintWords},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateBigintWords方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createBigintWords\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char* srcCallNative = R\"JS(createBigintWords())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_CreateBigintWords success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createbigintuint64",
      children: "OH_JSVM_CreateBigintUint64"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据给定的uint64类型对象创建JavaScript BigInt对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// 声明uint64_t的变量value\nstatic uint64_t TEST_VALUE = 5555555555555555555;\n// OH_JSVM_CreateBigintUint64的样例方法\nstatic JSVM_Value CreateBigintUint64(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 将value转化为JSVM_Value类型返回\n    JSVM_Value returnValue = nullptr;\n    JSVM_Status status = OH_JSVM_CreateBigintUint64(env, TEST_VALUE, &returnValue);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_CreateBigintUint64 fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_CreateBigintUint64 success\");\n    }\n    return returnValue;\n}\n// CreateBigintUint64注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateBigintUint64},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateBigintUint64方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createBigintUint64\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char* srcCallNative = R\"JS(createBigintUint64())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_CreateBigintUint64 success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getvaluebigintuint64",
      children: "OH_JSVM_GetValueBigintUint64"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取给定JavaScript BigInt的uint64_t基础类型值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_GetValueBigintUint64的样例方法\nstatic JSVM_Value GetValueBigintUint64(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 从参数值中获取BigInt的数值\n    uint64_t value = 0;\n    bool lossLess = false;\n    OH_JSVM_GetValueBigintUint64(env, args[0], &value, &lossLess);\n    // 判断从JS侧获取bigint是否为无损转换，如果不是抛出异常\n    if (!lossLess) {\n        OH_JSVM_ThrowError(env, nullptr, \"BigInt values have no lossless conversion\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM GetValueBigintUint64 success\");\n    }\n    JSVM_Value returnValue = nullptr;\n    OH_JSVM_CreateBigintUint64(env, value, &returnValue);\n    return returnValue;\n}\n// GetValueBigintUint64注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetValueBigintUint64},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetValueBigintUint64方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getValueBigintUint64\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char* srcCallNative = R\"JS(getValueBigintUint64(BigInt(5555555555555555)))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM GetValueBigintUint64 success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createbigintint64",
      children: "OH_JSVM_CreateBigintInt64"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据给定的uint64类型对象创建JavaScript BigInt对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// 声明int64_t的变量value\nstatic int64_t TEST_VALUE_DEMO = -5555555555555555555;\n// OH_JSVM_CreateBigintInt64的样例方法\nstatic JSVM_Value CreateBigintInt64(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    JSVM_Value returnValue = nullptr;\n    JSVM_Status status = OH_JSVM_CreateBigintInt64(env, TEST_VALUE_DEMO, &returnValue);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_CreateBigintInt64 fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_CreateBigintInt64 success\");\n    }\n    return returnValue;\n}\n// CreateBigintInt64注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateBigintInt64},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateBigintInt64方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createBigintInt64\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char* srcCallNative = R\"JS(createBigintInt64())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_CreateBigintInt64 success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getvaluebigintint64",
      children: "OH_JSVM_GetValueBigintInt64"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于从传入的参数中提取64位整数的BigInt数据，以供后续处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_GetValueBigintInt64的样例方法\nstatic JSVM_Value GetBigintInt64(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 从传入的参数中提取64位整数的BigInt数据\n    int64_t value = 0;\n    bool lossLess = false;\n    OH_JSVM_GetValueBigintInt64(env, args[0], &value, &lossLess);\n    // 判断从JS侧获取bigint是否为无损转换，如果不是抛出异常\n    if (!lossLess) {\n        OH_JSVM_ThrowError(env, nullptr, \"BigInt values have no lossless conversion\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM GetBigintInt64 success\");\n    }\n    JSVM_Value returnValue = nullptr;\n    OH_JSVM_CreateBigintInt64(env, value, &returnValue);\n    return returnValue;\n}\n// GetBigintInt64注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetBigintInt64},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetBigintInt64方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getBigintInt64\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char* srcCallNative = R\"JS(getBigintInt64(BigInt(-5555555555555555)))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM GetValueBigintUint64 success\n"
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