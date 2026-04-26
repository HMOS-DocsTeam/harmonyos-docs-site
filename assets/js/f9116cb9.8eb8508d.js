"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["595281"], {
592923(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_primitive_use_jsvm_about_primitive_md_f91_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-primitive-use-jsvm-about-primitive-md-f91.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_primitive_use_jsvm_about_primitive_md_f91_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-primitive/use-jsvm-about-primitive","title":"使用JSVM-API接口进行primitive类相关开发","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-primitive/use-jsvm-about-primitive.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-primitive","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-primitive/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-primitive/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"使用JSVM-API接口进行primitive类相关开发","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-primitive","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行object相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-object/"},"next":{"title":"使用JSVM-API接口处理异步操作","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-promise/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-primitive/use-jsvm-about-primitive.md


const frontMatter = {
	title: '使用JSVM-API接口进行primitive类相关开发',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-primitive',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行primitive类相关开发';

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
  "value": "OH_JSVM_CoerceToBool",
  "id": "oh_jsvm_coercetobool",
  "level": 3
}, {
  "value": "OH_JSVM_CoerceToNumber",
  "id": "oh_jsvm_coercetonumber",
  "level": 3
}, {
  "value": "OH_JSVM_CoerceToObject",
  "id": "oh_jsvm_coercetoobject",
  "level": 3
}, {
  "value": "OH_JSVM_CoerceToString",
  "id": "oh_jsvm_coercetostring",
  "level": 3
}, {
  "value": "OH_JSVM_GetBoolean",
  "id": "oh_jsvm_getboolean",
  "level": 3
}, {
  "value": "OH_JSVM_GetValueBool",
  "id": "oh_jsvm_getvaluebool",
  "level": 3
}, {
  "value": "OH_JSVM_GetGlobal",
  "id": "oh_jsvm_getglobal",
  "level": 3
}, {
  "value": "OH_JSVM_GetNull",
  "id": "oh_jsvm_getnull",
  "level": 3
}, {
  "value": "OH_JSVM_GetUndefined",
  "id": "oh_jsvm_getundefined",
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
        id: "使用jsvm-api接口进行primitive类相关开发",
        children: "使用JSVM-API接口进行primitive类相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用JSVM-API接口时，开发人员可以实现在JSVM模块中与JavaScript对象的交互，并进行数据转换和获取特定对象的操作，它们在不同的场景中发挥着重要的作用，使开发人员能够更灵活地处理JavaScript值和对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在使用JSVM操作JavaScript对象时，需要了解一些基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "JavaScript值到C/C++类型的转换："
          })
        }), " 在JSVM模块中，可以使用JSVM函数将JavaScript值转换为C/C++的数据类型，如将JavaScript数值转换为C/C++的整数、将JavaScript字符串转换为C/C++的字符数组等。同样，也可以将C/C++的数据类型转换为JavaScript值，以便将结果返回给JavaScript代码。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_CoerceToBool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将目标值转换为Boolean类型对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CoerceToNumber"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将目标值转换为Number类型对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CoerceToObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将目标值转换为Object类型对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CoerceToString"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将目标值转换为String类型对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetBoolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取JavaScript单例对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueBool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JavaScript Boolean的C布尔基础类型值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetGlobal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取当前环境中的全局global对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetNull"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取JavaScript null。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetUndefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取JavaScript undefined。"
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
      }), "。本文仅展示接口对应的C++相关代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_coercetobool",
      children: "OH_JSVM_CoerceToBool"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于将一个给定的JavaScript值强制转为JavaScript boolean值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_CoerceToBool的样例方法\nstatic JSVM_Value CoerceToBool(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    JSVM_Value boolean = nullptr;\n    JSVM_Status status = OH_JSVM_CoerceToBool(env, args[0], &boolean);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_CoerceToBool failed\");\n    } else {\n        bool result = false;\n        OH_JSVM_GetValueBool(env, boolean, &result);\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_CoerceToBool success:%{public}d\", result);\n    }\n    return boolean;\n}\n// CoerceToBool注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CoerceToBool},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CoerceToBool方法别名，ArkTS侧调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"coerceToBool\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(coerceToBool(\"123\"))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_CoerceToBool success:1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_coercetonumber",
      children: "OH_JSVM_CoerceToNumber"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于将给定的JavaScript value强转为JavaScript number。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_CoerceToNumber的样例方法\nstatic JSVM_Value CoerceToNumber(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    JSVM_Value number = nullptr;\n    JSVM_Status status = OH_JSVM_CoerceToNumber(env, args[0], &number);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_CoerceToNumber failed\");\n    } else {\n        int32_t result = 0;\n        OH_JSVM_GetValueInt32(env, number, &result);\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_CoerceToNumber success:%{public}d\", result);\n    }\n    return number;\n}\n// CoerceToNumber注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CoerceToNumber},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CoerceToNumber方法别名，ArkTS侧调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"coerceToNumber\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(coerceToNumber(true))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_CoerceToNumber success:1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_coercetoobject",
      children: "OH_JSVM_CoerceToObject"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于将给定的JavaScript value强转为JavaScript Object类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_CoerceToObject的样例方法\nstatic JSVM_Value CoerceToObject(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    JSVM_Value obj = nullptr;\n    JSVM_Status status = OH_JSVM_CoerceToObject(env, args[0], &obj);\n    if (status != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"JSVM OH_JSVM_CoerceToObject failed\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_CoerceToObject success\");\n    }\n    return obj;\n}\n// CoerceToObject注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CoerceToObject},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CoerceToObject方法别名，ArkTS侧调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"coerceToObject\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(coerceToObject(123))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_CoerceToObject success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_coercetostring",
      children: "OH_JSVM_CoerceToString"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于将给定的JavaScript value强转为JavaScript string类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_CoerceToString的样例方法\nstatic JSVM_Value CoerceToString(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    JSVM_Value str = nullptr;\n    JSVM_Status status = OH_JSVM_CoerceToString(env, args[0], &str);\n    if (status != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"JSVM OH_JSVM_CoerceToString failed\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_CoerceToString success\");\n    }\n    return str;\n}\n// CoerceToString注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CoerceToString},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CoerceToString方法别名，ArkTS侧调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"coerceToString\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(coerceToString(22222))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_CoerceToString success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getboolean",
      children: "OH_JSVM_GetBoolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取给定布尔值的JavaScript单例对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_GetBoolean的样例方法\nstatic JSVM_Value GetBoolean(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 传入两个参数并解析\n    size_t argc = 2;\n    JSVM_Value argv[2] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, argv, nullptr, nullptr);\n    int32_t paramData = 0;\n    OH_JSVM_GetValueInt32(env, argv[0], &paramData);\n    int32_t paramValue = 0;\n    OH_JSVM_GetValueInt32(env, argv[1], &paramValue);\n    JSVM_Value returnValue = nullptr;\n    bool type = false;\n    if (paramData == paramValue) {\n        OH_LOG_INFO(LOG_APP, \"JSVM resultType equal\");\n        type = true;\n    }\n    JSVM_Status status = OH_JSVM_GetBoolean(env, type, &returnValue);\n    if (status != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"JSVM OH_JSVM_GetBoolean failed\");\n    } else {\n        bool result = false;\n        OH_JSVM_GetValueBool(env, returnValue, &result);\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_GetBoolean success:%{public}d\", result);\n    }\n    // 返回结果\n    return returnValue;\n}\n// GetBoolean注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetBoolean},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetBoolean方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getBoolean\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(getBoolean(1, 2);\n                                 getBoolean(1, 1))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_GetBoolean success:0\nJSVM resultType equal\nJSVM OH_JSVM_GetBoolean success:1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getvaluebool",
      children: "OH_JSVM_GetValueBool"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用这个函数将JavaScript中的布尔值转为等价的C布尔值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_GetValueBool的样例方法\nstatic JSVM_Value GetValueBool(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    bool result = false;\n    JSVM_Status status = OH_JSVM_GetValueBool(env, args[0], &result);\n    if (status != JSVM_OK) {\n        // 如果OH_JSVM_GetValueBool成功会返回JSVM_OK，如果传入一个非布尔值则会返回JSVM_BOOLEAN_EXPECTED\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_GetValueBool fail:%{public}d\", status);\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_GetValueBool success:%{public}d\", result);\n    }\n    JSVM_Value boolJv = nullptr;\n    OH_JSVM_GetBoolean(env, result, &boolJv);\n    return boolJv;\n}\n// GetValueBool注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetValueBool},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetValueBool方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getValueBool\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(getValueBool(\"abc\");\n                                getValueBool(true);\n                                getValueBool(false);)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_GetValueBool fail:7\nJSVM OH_JSVM_GetValueBool success:1\nJSVM OH_JSVM_GetValueBool success:0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getglobal",
      children: "OH_JSVM_GetGlobal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取全局JavaScript对象。该函数的主要作用是获取表示JavaScript全局对象的JSVM_Value，使JSVM模块能够与JavaScript运行时的全局对象进行交互。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_GetGlobal的样例方法\nstatic JSVM_Value GetGlobal(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获取全局对象\n    JSVM_Value value = nullptr;\n    JSVM_Value global = nullptr;\n    OH_JSVM_CreateInt32(env, 1, &value);\n    JSVM_Status status = OH_JSVM_GetGlobal(env, &global);\n    OH_JSVM_SetNamedProperty(env, global, \"Row\", value);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_GetGlobal fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_GetGlobal success\");\n    }\n    return global;\n}\n// GetGlobal注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetGlobal},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetGlobal方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getGlobal\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(getGlobal())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_GetGlobal success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getnull",
      children: "OH_JSVM_GetNull"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取 JavaScript null 对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_GetNull的样例方法\nstatic JSVM_Value GetNull(JSVM_Env env, JSVM_CallbackInfo info) {\n    JSVM_Value nullValue = nullptr;\n    JSVM_Status status = OH_JSVM_GetNull(env, &nullValue);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_GetNull fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_GetNull success\");\n    }\n    return nullValue;\n}\n// GetNull注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetNull},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetNull方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getNull\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(getNull())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_GetNull success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getundefined",
      children: "OH_JSVM_GetUndefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取 JavaScript undefined 对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_GetUndefined的样例方法\nstatic JSVM_Value GetUndefined(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获取并解析传入的参数\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 创建一个undefined值\n    JSVM_Value value = nullptr;\n    JSVM_Status status = OH_JSVM_GetUndefined(env, &value);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_GetUndefined failed\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_GetUndefined success\");\n    }\n    return value;\n}\n// GetUndefined注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetUndefined},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetUndefined方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getUndefined\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(getUndefined())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_GetUndefined success\n"
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