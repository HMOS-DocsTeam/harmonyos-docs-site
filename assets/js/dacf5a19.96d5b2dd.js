"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["512538"], {
322935(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_array_use_jsvm_about_array_md_dac_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-array-use-jsvm-about-array-md-dac.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_array_use_jsvm_about_array_md_dac_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-array/use-jsvm-about-array","title":"使用JSVM-API接口进行array相关开发","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-array/use-jsvm-about-array.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-array","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-array/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-array/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用JSVM-API接口进行array相关开发","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-array","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行JSON操作","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-json/"},"next":{"title":"使用JSVM-API接口进行ArrayBuffer相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-arraybuffer/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-array/use-jsvm-about-array.md


const frontMatter = {
	title: '使用JSVM-API接口进行array相关开发',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-array',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行array相关开发';

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
  "value": "OH_JSVM_CreateArray",
  "id": "oh_jsvm_createarray",
  "level": 3
}, {
  "value": "OH_JSVM_CreateArrayWithLength",
  "id": "oh_jsvm_createarraywithlength",
  "level": 3
}, {
  "value": "OH_JSVM_CreateTypedarray",
  "id": "oh_jsvm_createtypedarray",
  "level": 3
}, {
  "value": "OH_JSVM_CreateDataview",
  "id": "oh_jsvm_createdataview",
  "level": 3
}, {
  "value": "OH_JSVM_GetArrayLength",
  "id": "oh_jsvm_getarraylength",
  "level": 3
}, {
  "value": "OH_JSVM_GetTypedarrayInfo",
  "id": "oh_jsvm_gettypedarrayinfo",
  "level": 3
}, {
  "value": "OH_JSVM_GetDataviewInfo",
  "id": "oh_jsvm_getdataviewinfo",
  "level": 3
}, {
  "value": "OH_JSVM_IsArray",
  "id": "oh_jsvm_isarray",
  "level": 3
}, {
  "value": "OH_JSVM_SetElement",
  "id": "oh_jsvm_setelement",
  "level": 3
}, {
  "value": "OH_JSVM_GetElement",
  "id": "oh_jsvm_getelement",
  "level": 3
}, {
  "value": "OH_JSVM_HasElement",
  "id": "oh_jsvm_haselement",
  "level": 3
}, {
  "value": "OH_JSVM_DeleteElement",
  "id": "oh_jsvm_deleteelement",
  "level": 3
}, {
  "value": "OH_JSVM_IsDataview",
  "id": "oh_jsvm_isdataview",
  "level": 3
}, {
  "value": "OH_JSVM_IsTypedarray",
  "id": "oh_jsvm_istypedarray",
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
        id: "使用jsvm-api接口进行array相关开发",
        children: "使用JSVM-API接口进行array相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用JSVM-API接口进行数组（array）相关开发时，在JSVM模块中可以调用相关接口直接操作和处理JavaScript中的数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用 JSVM-API 接口进行数组（array）相关开发时，涉及的基本概念主要包括数组的创建、访问、修改、遍历以及与数组相关的操作。这些概念对于理解在 JSVM 模块中与 JavaScript 数组交互非常重要。以下是一些关键概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "数组的创建"
          })
        }), "：若在 JSVM 模块中需要创建新的 JavaScript 数组时，可以使用提供的 OH_JSVM_CreateArray 接口创建数组，将传递给 JavaScript 层。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "数组相关操作"
          })
        }), "：在 JSVM 模块中通过对应的接口获取 JavaScript 数组的长度、检索指定索引处的元素、设置指定索引的元素值，从而实现 JSVM 模块与 JavaScript 数组的交互。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "TypedArray"
          })
        }), "：JavaScript 中的 TypedArray 是一种类数组数据视图，用于描述二进制数据。它可以视为指定元素类型的类数组数据视图，TypedArray 没有直接构造器，但是可以通过其子类构造器构造创建。子类包括：Int8Array、Uint8Array、Uint8ClampedArray、Int16Array、Int32Array等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ArrayBuffer"
          })
        }), "：ArrayBuffer 是固定长度的二进制数据缓冲区。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "DataView"
          })
        }), "：DataView 是 JavaScript 中的一种视图，是可以从 ArrayBuffer 对象中读写多种数值类型的底层接口。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_CreateArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个新的 JavaScript 数组对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateArrayWithLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个指定长度的 JavaScript 数组对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateTypedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在现有的ArrayBuffer上创建JavaScript TypedArray对象，TypedArray对象提供类似类数组的视图，每个元素具有相同的二进制标量数据类型。注意(length * size_of_element) + byte_offset 不得超过传入数组的大小（以字节为单位），否则会引发RangeError异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateDataview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在现有的 ArrayBuffer 上创建一个 JavaScript DataView 对象，DataView 对象在底层数据缓冲区上提供类似数组的视图，该 ArrayBuffer 允许有不同大小和类型的元素。要求 byte_length + byte_offset 小于或等于传入数组的字节大小，否则会引发 RangeError 异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetArrayLength"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回 Array 对象的长度"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetTypedarrayInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取 TypedArray（类型化数组）对象的信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetDataviewInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取 DataView 对象的信息"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsArray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断一个 JavaScript 对象是否为 Array 类型对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_SetElement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在给定对象的指定索引处设置元素"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetElement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定对象指定索引处的元素"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_HasElement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "若给定对象的指定索引处拥有属性，获取该元素"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_DeleteElement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尝试删除给定对象的指定索引处的元素"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsDataview"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断一个 JavaScript 对象是否为 DataView 类型对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsTypedarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断一个 JavaScript 对象是否为 TypedArray 类型对象"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JSVM-API 接口开发流程参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/use-jsvm-process",
        children: "使用 JSVM-API 实现 JS 与 C/C++ 语言交互开发流程"
      }), "，本文仅对接口对应 C++ 相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createarray",
      children: "OH_JSVM_CreateArray"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个新的 JavaScript 数组对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// CreateArray注册回调\nstatic int DIFF_VALUE_FIVE = 5;\n// OH_JSVM_CreateArray的样例方法\nstatic JSVM_Value CreateArray(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 创建一个空数组\n    JSVM_Value array = nullptr;\n    JSVM_Status status = OH_JSVM_CreateArray(env, &array);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM CreateArray fail\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM CreateArray success\");\n    }\n    // 对创建的数组进行赋值\n    for (int i = 0; i < DIFF_VALUE_FIVE; i++) {\n        JSVM_Value element;\n        JSVM_CALL(OH_JSVM_CreateInt32(env, i, &element));\n        JSVM_CALL(OH_JSVM_SetElement(env, array, i, element));\n    }\n    return array;\n}\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateArray},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateArray方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createArray\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n  function testCreateArray() {\n    return createArray();\n  }\n  testCreateArray();\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM CreateArray success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createarraywithlength",
      children: "OH_JSVM_CreateArrayWithLength"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个指定长度的 JavaScript 数组对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_CreateArrayWithLength的样例方法\nstatic JSVM_Value CreateArrayWithLength(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value argv[1] = {nullptr};\n    JSVM_Value result = nullptr;\n    // 解析传递的参数OH_JSVM_GetCbInfo\n    OH_JSVM_GetCbInfo(env, info, &argc, argv, nullptr, nullptr);\n    // 获取传递的数组长度\n    int32_t length = 0;\n    OH_JSVM_GetValueInt32(env, argv[0], &length);\n    // 使用OH_JSVM_CreateArrayWithLength创建传递固定长度的数组\n    JSVM_Status status = OH_JSVM_CreateArrayWithLength(env, length, &result);\n    if (status == JSVM_OK) {\n        // 给创建的数组设置值\n        for (int32_t i = 0; i < length; i++) {\n            JSVM_Value value;\n            JSVM_CALL(OH_JSVM_CreateInt32(env, i, &value));\n            JSVM_CALL(OH_JSVM_SetElement(env, result, i, value));\n        }\n        OH_LOG_INFO(LOG_APP, \"JSVM CreateArrayWithLength success\");\n    } else {\n        OH_LOG_ERROR(LOG_APP, \"JSVM CreateArrayWithLength fail\");\n    }\n    return result;\n}\n// CreateArrayWithLength注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateArrayWithLength},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateArrayWithLength方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createArrayWithLength\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(\nlet num = 7;\nfunction testCreateArrayWithLength(num){\n    return createArrayWithLength(num);\n}\ntestCreateArrayWithLength(num);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM CreateArrayWithLength success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createtypedarray",
      children: "OH_JSVM_CreateTypedarray"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在现有的 ArrayBuffer上 创建一个 JavaScript TypedArray 对象,TypedArray 对象在底层数据缓冲区上提供类似数组的视图，其中每个元素都具有相同的底层二进制标量数据类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_CreateTypedarray的样例方法\nstatic int DIFF_VALUE_THREE = 3;\nstatic JSVM_Value CreateTypedArray(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    int32_t typeNum = 0;\n    OH_JSVM_GetValueInt32(env, args[0], &typeNum);\n    JSVM_TypedarrayType arrayType;\n    // 用于存储每个元素的大小\n    size_t elementSize = 0;\n    // 转换为JSVM_TypedarrayType类型\n    arrayType = static_cast<JSVM_TypedarrayType>(typeNum);\n    switch (typeNum) {\n        case JSVM_INT8_ARRAY:\n        case JSVM_UINT8_ARRAY:\n        case JSVM_UINT8_CLAMPED_ARRAY:\n            elementSize = sizeof(int8_t);\n            break;\n        case JSVM_INT16_ARRAY:\n        case JSVM_UINT16_ARRAY:\n            elementSize = sizeof(int16_t);\n            break;\n        case JSVM_INT32_ARRAY:\n        case JSVM_UINT32_ARRAY:\n            elementSize = sizeof(int32_t);\n            break;\n        case JSVM_FLOAT32_ARRAY:\n            elementSize = sizeof(float);\n            break;\n        case JSVM_FLOAT64_ARRAY:\n            elementSize = sizeof(double);\n            break;\n        case JSVM_BIGINT64_ARRAY:\n        case JSVM_BIGUINT64_ARRAY:\n            elementSize = sizeof(int64_t);\n            break;\n        default:\n            // 默认创建JSVM_INT8_ARRAY类型\n            arrayType = JSVM_INT8_ARRAY;\n            elementSize = sizeof(int8_t);\n            break;\n    }\n    size_t length = DIFF_VALUE_THREE;\n    JSVM_Value arrayBuffer = nullptr;\n    JSVM_Value typedArray = nullptr;\n    void *data;\n    // 创建一个ArrayBuffer\n    OH_JSVM_CreateArraybuffer(env, length * elementSize, (void **)&data, &arrayBuffer);\n    // 根据给定类型创建TypedArray\n    JSVM_Status status = OH_JSVM_CreateTypedarray(env, arrayType, length, arrayBuffer, 0, &typedArray);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM CreateTypedArray fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM CreateTypedArray success\");\n    }\n    return typedArray;\n}\n// CreateTypedArray注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateTypedArray},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateTypedArray方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createTypedArray\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(\nconst type = {\n    INT8_ARRAY: 0,\n    UINT8_ARRAY: 1,\n    UINT8_CLAMPED_ARRAY: 2,\n    INT16_ARRAY: 3,\n    UINT16_ARRAY: 4,\n    INT32_ARRAY: 5,\n    UINT32_ARRAY: 6,\n    FLOAT32_ARRAY: 7,\n    FLOAT64_ARRAY: 8,\n    BIGINT64_ARRAY: 9,\n    BIGUINT64_ARRAY: 10\n};\ncreateTypedArray(type.INT8_ARRAY);\ncreateTypedArray(type.INT32_ARRAY);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM CreateTypedArray success\nJSVM CreateTypedArray success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createdataview",
      children: "OH_JSVM_CreateDataview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在现有的 ArrayBuffer 上创建一个 JavaScript DataView 对象，DataView 对象在底层数据缓冲区上提供类似数组的视图。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "static int DIFF_VALUE_FOUR = 4;\nstatic int DIFF_VALUE_TWELVE = 12;\n// OH_JSVM_CreateDataview的样例方法\nstatic JSVM_Value CreateDataView(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获取js侧传入的两个参数\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    JSVM_Value arrayBuffer = nullptr;\n    JSVM_Value result = nullptr;\n    // DataView的字节长度\n    size_t byteLength = DIFF_VALUE_TWELVE;\n    // 字节偏移量\n    size_t byteOffset = DIFF_VALUE_FOUR;\n    // 获取回调函数的参数信息\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 将参数转换为对象类型\n    OH_JSVM_CoerceToObject(env, args[0], &arrayBuffer);\n    // 创建一个数据视图对象，并指定字节长度和字节偏移量\n    JSVM_Status status = OH_JSVM_CreateDataview(env, byteLength, arrayBuffer, byteOffset, &result);\n    // 获取DataView的指针和长度信息\n    uint8_t *data = nullptr;\n    // 为DataView赋值\n    int32_t infoType = 0;\n    OH_JSVM_GetValueInt32(env, args[1], &infoType);\n    size_t returnLength = 0;\n    JSVM_Value returnArrayBuffer = nullptr;\n    size_t returnOffset = 0;\n    enum InfoType { BYTE_LENGTH, ARRAY_BUFFER, BYTE_OFFSET };\n    // 获取dataview信息\n    OH_JSVM_GetDataviewInfo(env, result, &returnLength, (void **)&data, &returnArrayBuffer, &returnOffset);\n    JSVM_Value returnResult = nullptr;\n    switch (infoType) {\n        case BYTE_LENGTH:\n            JSVM_Value len;\n            JSVM_CALL(OH_JSVM_CreateInt32(env, returnLength, &len));\n            returnResult = len;\n            if (status != JSVM_OK) {\n                OH_LOG_ERROR(LOG_APP, \"JSVM CreateDataView fail\");\n            } else {\n                OH_LOG_INFO(LOG_APP, \"JSVM CreateDataView success, returnLength: %{public}d\", returnLength);\n            }\n            break;\n        case ARRAY_BUFFER:\n            {\n                bool isArraybuffer = false;\n                JSVM_CALL(OH_JSVM_IsArraybuffer(env, returnArrayBuffer, &isArraybuffer));\n                JSVM_Value isArray;\n                OH_JSVM_GetBoolean(env, isArraybuffer, &isArray);\n                returnResult = isArray;\n                if (status != JSVM_OK) {\n                    OH_LOG_ERROR(LOG_APP, \"JSVM CreateDataView fail\");\n                } else {\n                    OH_LOG_INFO(LOG_APP, \"JSVM CreateDataView success, isArraybuffer: %{public}d\", isArraybuffer);\n                }\n                break;\n            }\n        case BYTE_OFFSET:\n            JSVM_Value offset;\n            JSVM_CALL(OH_JSVM_CreateInt32(env, returnOffset, &offset));\n            returnResult = offset;\n            if (status != JSVM_OK) {\n                OH_LOG_ERROR(LOG_APP, \"JSVM CreateDataView fail\");\n            } else {\n                OH_LOG_INFO(LOG_APP, \"JSVM CreateDataView success, returnOffset: %{public}d\", returnOffset);\n            }\n            break;\n        default:\n            break;\n    }\n    return returnResult;\n}\n// CreateDataView注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateDataView},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateDataView方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createDataView\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n let BYTE_LENGTH = 0;\n createDataView(new ArrayBuffer(16), BYTE_LENGTH);\n let IS_ARRAYBUFFER = 1;\n createDataView(new ArrayBuffer(16), IS_ARRAYBUFFER);\n let BYTE_OFFSET = 2;\n createDataView(new ArrayBuffer(16), BYTE_OFFSET);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CreateDataView success, returnLength: 12\nJSVM CreateDataView success, isArraybuffer: 1\nJSVM CreateDataView success, returnOffset: 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getarraylength",
      children: "OH_JSVM_GetArrayLength"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回 Array 对象的长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_GetArrayLength的样例方法\nstatic JSVM_Value GetArrayLength(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    JSVM_Value result = nullptr;\n    // 这里要对length进行初始化\n    uint32_t length = 0;\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 检查参数是否为数组\n    bool isArray = false;\n    OH_JSVM_IsArray(env, args[0], &isArray);\n    if (!isArray) {\n        OH_LOG_INFO(LOG_APP, \"JSVM Argument must be an array\");\n        return nullptr;\n    }\n    /*\n     * 当成功获取数组长度时，length会被赋值成实际JSArray的长度，接口返回JSVM_OK状态码；\n     * 当args[0]不是一个JSArray类型。例如，当args[0]是一个proxy对象时，无法获取长度。\n     * 此时，length维持原值不变，接口返回JSVM_ARRAY_EXPECTED状态码。\n     */\n    JSVM_Status status = OH_JSVM_GetArrayLength(env, args[0], &length);\n    if (status == JSVM_OK) {\n        // 创建返回值\n        JSVM_CALL(OH_JSVM_CreateInt32(env, length, &result));\n        OH_LOG_INFO(LOG_APP, \"JSVM length: %{public}d\", length);\n    }\n    return result;\n}\n// GetArrayLength注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetArrayLength},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetArrayLength方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getArrayLength\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(\nlet data = [0, 1, 2, 3, 4, 5];\ngetArrayLength(data);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM length: 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_gettypedarrayinfo",
      children: "OH_JSVM_GetTypedarrayInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取 TypedArray（类型化数组）对象的信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_GetTypedarrayInfo的样例方法\nstatic JSVM_Value GetTypedArrayInfo(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获取并解析参数，第一个参数为需要获得的信息的TypedArray类型数据，第二个参数为需要获得的信息类型的枚举值\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n\n    // 将第二个参数转为int32类型便于比较\n    int32_t infoTypeParam = 0;\n    OH_JSVM_GetValueInt32(env, args[1], &infoTypeParam);\n    // 定义枚举类型与ArkTS侧枚举类型infoType顺序含义一致\n    enum InfoType { INFO_TYPE, INFO_LENGTH, INFO_ARRAY_BUFFER, INFO_BYTE_OFFSET };\n    void *data;\n    JSVM_TypedarrayType type;\n    size_t byteOffset = 0;\n    size_t length = 0;\n    JSVM_Value arrayBuffer = nullptr;\n    // 调用接口OH_JSVM_GetTypedarrayInfo获得TypedArray类型数据的信息\n    JSVM_Status status = OH_JSVM_GetTypedarrayInfo(env, args[0], &type, &length, &data, &arrayBuffer, &byteOffset);\n    JSVM_Value result = nullptr;\n    // 根据属性名，返回TypedArray对应的属性值\n    switch (infoTypeParam) {\n        case INFO_TYPE:\n            // 如果传入的参数是int8类型的TypedArray数据，它的类型（type）为JSVM_INT8_ARRAY\n            JSVM_Value int8_type;\n            OH_JSVM_GetBoolean(env, type == JSVM_INT8_ARRAY, &int8_type);\n            result = int8_type;\n            if (status != JSVM_OK) {\n                OH_LOG_ERROR(LOG_APP, \"JSVM GetTypedArrayInfo fail\");\n            } else {\n                OH_LOG_INFO(\n                    LOG_APP, \"JSVM GetTypedArrayInfo success, JSVM_INT8_ARRAY: %{public}d\", type == JSVM_INT8_ARRAY);\n            }\n            break;\n        case INFO_LENGTH:\n            // TypedArray中的元素数\n            JSVM_Value jsvmLength;\n            JSVM_CALL(OH_JSVM_CreateInt32(env, length, &jsvmLength));\n            result = jsvmLength;\n            if (status != JSVM_OK) {\n                OH_LOG_ERROR(LOG_APP, \"JSVM GetTypedArrayInfo fail\");\n            } else {\n                OH_LOG_INFO(LOG_APP, \"JSVM GetTypedArrayInfo success, length: %{public}d\", length);\n            }\n            break;\n        case INFO_BYTE_OFFSET:\n            // TypedArray数组的第一个元素所在的基础原生数组中的字节偏移量\n            JSVM_Value jsvmOffset;\n            JSVM_CALL(OH_JSVM_CreateInt32(env, byteOffset, &jsvmOffset));\n            result = jsvmOffset;\n            if (status != JSVM_OK) {\n                OH_LOG_ERROR(LOG_APP, \"JSVM GetTypedArrayInfo fail\");\n            } else {\n                OH_LOG_INFO(LOG_APP, \"JSVM GetTypedArrayInfo success, byteOffset: %{public}d\", byteOffset);\n            }\n            break;\n        case INFO_ARRAY_BUFFER:\n            {\n                // TypedArray下的ArrayBuffer\n                bool isArrayBuffer = false;\n                JSVM_CALL(OH_JSVM_IsArraybuffer(env, arrayBuffer, &isArrayBuffer));\n                JSVM_Value isArray;\n                OH_JSVM_GetBoolean(env, isArrayBuffer, &isArray);\n                result = isArray;\n                if (status != JSVM_OK) {\n                    OH_LOG_ERROR(LOG_APP, \"JSVM GetTypedArrayInfo fail\");\n                } else {\n                    OH_LOG_INFO(LOG_APP, \"JSVM GetTypedArrayInfo success, isArrayBuffer: %{public}d\", isArrayBuffer);\n                }\n                break;\n            }\n        default:\n            break;\n    }\n    return result;\n}\n// GetTypedArrayInfo注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetTypedArrayInfo},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetTypedArrayInfo方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getTypedArrayInfo\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n// is JSVM_INT8_ARRAY\ngetTypedArrayInfo(new Int8Array(3), 0);\n// length\ngetTypedArrayInfo(new Int8Array(5), 1);\n// is_arraybuffer\ngetTypedArrayInfo(new Int8Array(5), 2);\n// byteoffset\ngetTypedArrayInfo(new Int8Array(1), 3);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM GetTypedArrayInfo success, JSVM_INT8_ARRAY: 1\nJSVM GetTypedArrayInfo success, length: 5\nJSVM GetTypedArrayInfo success, isArrayBuffer: 1\nJSVM GetTypedArrayInfo success, byteOffset: 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getdataviewinfo",
      children: "OH_JSVM_GetDataviewInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取 Dataview 对象的信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_GetDataviewInfo的样例方法\nstatic JSVM_Value GetDataViewInfo(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获取并解析参数，第一个参数为需要获得的信息的DataView类型数据，第二个参数为需要获得的信息类型的枚举值\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 将第二个参数转为int32类型的数字\n    int32_t infoType = 0;\n    OH_JSVM_GetValueInt32(env, args[1], &infoType);\n    size_t byteLength = 0;\n    void *data;\n    JSVM_Value arrayBuffer = nullptr;\n    size_t byteOffset = 0;\n    // 定义枚举类型与ArkTS侧枚举类型infoType顺序含义一致\n    enum infoTypeEnum { BYTE_LENGTH, ARRAY_BUFFER, BYTE_OFFSET };\n    // 获取dataview信息\n    JSVM_Status status = OH_JSVM_GetDataviewInfo(env, args[0], &byteLength, &data, &arrayBuffer, &byteOffset);\n    JSVM_Value result = nullptr;\n    switch (infoType) {\n        case BYTE_LENGTH:\n            // 返回查询DataView的长度\n            JSVM_Value len;\n            JSVM_CALL(OH_JSVM_CreateInt32(env, byteLength, &len));\n            result = len;\n            if (status != JSVM_OK) {\n                OH_LOG_ERROR(LOG_APP, \"JSVM GetDataViewInfo fail\");\n            } else {\n                OH_LOG_INFO(LOG_APP, \"JSVM GetDataViewInfo success, byteLength: %{public}d\", byteLength);\n            }\n            break;\n        case ARRAY_BUFFER:\n            {\n                // 判断DataView的Info里的arraybuffer是否为arraybuffer\n                bool isArrayBuffer = false;\n                JSVM_CALL(OH_JSVM_IsArraybuffer(env, arrayBuffer, &isArrayBuffer));\n                JSVM_Value isArray;\n                OH_JSVM_GetBoolean(env, isArrayBuffer, &isArray);\n                result = isArray;\n                if (status != JSVM_OK) {\n                    OH_LOG_ERROR(LOG_APP, \"JSVM GetDataViewInfo fail\");\n                } else {\n                    OH_LOG_INFO(LOG_APP, \"JSVM GetDataViewInfo success, isArrayBuffer: %{public}d\", isArrayBuffer);\n                }\n                break;\n            }\n        case BYTE_OFFSET:\n            // 返回查询DataView的偏移量\n            JSVM_Value offset;\n            JSVM_CALL(OH_JSVM_CreateInt32(env, byteOffset, &offset));\n            result = offset;\n            if (status != JSVM_OK) {\n                OH_LOG_ERROR(LOG_APP, \"JSVM GetDataViewInfo fail\");\n            } else {\n                OH_LOG_INFO(LOG_APP, \"JSVM GetDataViewInfo success, byteOffset: %{public}d\", byteOffset);\n            }\n            break;\n        default:\n            break;\n    }\n    return result;\n}\n// GetDataViewInfo注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetDataViewInfo},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetDataViewInfo方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getDataViewInfo\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n// bytelength\ngetDataViewInfo(new DataView(new Int8Array([2,5]).buffer), 0);\n// is arraybuffer\nlet data = 'a';\nlet isarraybuffer = 1;\ngetDataViewInfo(data, isarraybuffer);\n// is arraybuffer\ndata = new DataView(new Int8Array([2,5,3]).buffer);\nisarraybuffer = 1;\ngetDataViewInfo(data, isarraybuffer);\n// byte_offset\ndata = new DataView(new Int8Array([2,5,3]).buffer);\nisarraybuffer = 2;\ngetDataViewInfo(data, isarraybuffer);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM GetDataViewInfo success, byteLength: 2\nJSVM GetDataViewInfo fail\nJSVM GetDataViewInfo success, isArrayBuffer: 1\nJSVM GetDataViewInfo success, byteOffset: 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_isarray",
      children: "OH_JSVM_IsArray"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断一个 JavaScript 对象是否为 Array 类型对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_IsArray的样例方法\nstatic JSVM_Value IsArray(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    bool result = false;\n    JSVM_Status status = OH_JSVM_IsArray(env, args[0], &result);\n    JSVM_Value returnValue = nullptr;\n    JSVM_CALL(OH_JSVM_GetBoolean(env, result, &returnValue));\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM IsArray fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM IsArray success, IsArray: %{public}d\", result);\n    }\n    return returnValue;\n}\n// IsArray注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = IsArray},\n};\nstatic JSVM_CallbackStruct *method = param;\n// IsArray方法别名，TS侧调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"isArray\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(\nlet data = [1, 2, 3, 4, 5];\nisArray(data);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM IsArray success, IsArray: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_setelement",
      children: "OH_JSVM_SetElement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在给定对象的指定索引处设置元素。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_SetElement的样例方法\nstatic int DIFF_VALUE_THREE = 3;\nstatic JSVM_Value SetElement(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = DIFF_VALUE_THREE;\n    JSVM_Value args[3] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    int32_t index = 0;\n    OH_JSVM_GetValueInt32(env, args[1], &index);\n    JSVM_Status status = OH_JSVM_SetElement(env, args[0], index, args[2]);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM SetElement fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM SetElement success\");\n    }\n    return args[0];\n}\n// SetElement注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = SetElement},\n};\nstatic JSVM_CallbackStruct *method = param;\n// SetElement方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"setElement\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(\nlet data = [1, 2, 3, 4, 5];\nsetElement(data, 3, undefined);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM SetElement success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getelement",
      children: "OH_JSVM_GetElement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取给定对象指定索引处的元素。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_GetElement的样例方法\nstatic JSVM_Value GetElement(JSVM_Env env, JSVM_CallbackInfo info) {\n    // 获取js侧传入的两个参数\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 获取请求元素的索引值\n    uint32_t index = 0;\n    OH_JSVM_GetValueUint32(env, args[1], &index);\n    // 获取请求索引位置的元素值并存储在result中\n    JSVM_Value result = nullptr;\n    JSVM_Status status = OH_JSVM_GetElement(env, args[0], index, &result);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM GetElement fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM GetElement success\");\n    }\n    return result;\n}\n// GetElement注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetElement},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetElement方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getElement\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(\nlet arr = [10, 'hello', null, true];\ngetElement(arr, 3);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM GetElement success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_haselement",
      children: "OH_JSVM_HasElement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若给定对象的指定索引处拥有属性，获取元素。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_HasElement的样例方法\nstatic JSVM_Value HasElement(JSVM_Env env, JSVM_CallbackInfo info) {\n    // 获取js侧传入的两个参数\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 获取要判断的元素的索引\n    uint32_t index = 0;\n    OH_JSVM_GetValueUint32(env, args[1], &index);\n    // 判断指定索引位置的元素是否存在\n    bool hasElement = true;\n    JSVM_Status status = OH_JSVM_HasElement(env, args[0], index, &hasElement);\n    // 将boolean结果转换为JSVM_Value并返回\n    JSVM_Value result = nullptr;\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM hasElement fail\");\n    } else {\n        OH_JSVM_GetBoolean(env, hasElement, &result);\n        OH_LOG_INFO(LOG_APP, \"JSVM hasElement: %{public}d\", hasElement);\n    }\n    return result;\n}\n// HasElement注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = HasElement},\n};\nstatic JSVM_CallbackStruct *method = param;\n// HasElement方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"hasElement\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(\nlet arr = [10, 'hello', null, true];\nhasElement(arr, 0);\nhasElement(arr, 4);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM hasElement: 1\nJSVM hasElement: 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_deleteelement",
      children: "OH_JSVM_DeleteElement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "尝试删除给定对象的指定索引处的元素。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_DeleteElement的样例方法\nstatic JSVM_Value DeleteElement(JSVM_Env env, JSVM_CallbackInfo info) {\n    // 获取js侧传入的两个参数\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr));\n    // 获取要删除的元素的索引\n    uint32_t index = 0;\n    JSVM_CALL(OH_JSVM_GetValueUint32(env, args[1], &index));\n    // 尝试删除请求索引位置的元素\n    bool deleted = true;\n    JSVM_Status status = OH_JSVM_DeleteElement(env, args[0], index, &deleted);\n    // 将boolean结果转换为JSVM_Value并返回\n    JSVM_Value result = nullptr;\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM DeleteElement fail\");\n    } else {\n        OH_JSVM_GetBoolean(env, deleted, &result);\n        OH_LOG_INFO(LOG_APP, \"JSVM DeleteElement: %{public}d\", deleted);\n    }\n    return result;\n}\n// DeleteElement注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = DeleteElement},\n};\nstatic JSVM_CallbackStruct *method = param;\n// DeleteElement方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"deleteElement\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(\nlet arr = [10, 'hello', null, true];\ndeleteElement(arr, 0);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM DeleteElement: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_isdataview",
      children: "OH_JSVM_IsDataview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断一个 JavaScript 对象是否为 Dataview 类型对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_IsDataview的样例方法\nstatic JSVM_Value IsDataView(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 调用OH_JSVM_IsDataview接口判断给定入参是否为DataView数据。\n    bool result = false;\n    JSVM_Status status = OH_JSVM_IsDataview(env, args[0], &result);\n    JSVM_Value isDataView = nullptr;\n    OH_JSVM_GetBoolean(env, result, &isDataView);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM IsDataView fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM IsDataView: %{public}d\", result);\n    }\n    return isDataView;\n}\n// IsDataView注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = IsDataView},\n};\nstatic JSVM_CallbackStruct *method = param;\n// IsDataView方法别名，TS侧调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"isDataView\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(\nlet buffer = new ArrayBuffer(16);\nlet dataView = new DataView(buffer);\nisDataView(dataView);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM IsDataView: 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_istypedarray",
      children: "OH_JSVM_IsTypedarray"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断一个 JavaScript 对象是否为 TypedArray 类型对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_IsTypedarray的样例方法\nstatic JSVM_Value IsTypedarray(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    bool result = false;\n    JSVM_Status status = OH_JSVM_IsTypedarray(env, args[0], &result);\n    JSVM_Value isTypedArray = nullptr;\n    OH_JSVM_GetBoolean(env, result, &isTypedArray);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM IsTypedarray fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM IsTypedarray: %{public}d\", result);\n    }\n    return isTypedArray;\n}\n// IsTypedarray注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = IsTypedarray},\n};\nstatic JSVM_CallbackStruct *method = param;\n// IsTypedarray方法别名，TS侧调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"isTypedarray\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(\nisTypedarray(new Uint16Array([1, 2, 3, 4]));\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预计的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM IsTypedarray: 1\n"
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