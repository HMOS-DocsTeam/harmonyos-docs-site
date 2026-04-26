"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["904602"], {
684(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_object_use_jsvm_about_object_md_0a5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-object-use-jsvm-about-object-md-0a5.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_object_use_jsvm_about_object_md_0a5_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-object/use-jsvm-about-object","title":"使用JSVM-API接口进行object相关开发","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-object/use-jsvm-about-object.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-object","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-object/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"使用JSVM-API接口进行object相关开发","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-object","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行debug操作","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-debug-option/"},"next":{"title":"使用JSVM-API接口进行primitive类相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-primitive/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-object/use-jsvm-about-object.md


const frontMatter = {
	title: '使用JSVM-API接口进行object相关开发',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-object',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行object相关开发';

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
  "value": "OH_JSVM_GetPrototype",
  "id": "oh_jsvm_getprototype",
  "level": 3
}, {
  "value": "OH_JSVM_CreateObject",
  "id": "oh_jsvm_createobject",
  "level": 3
}, {
  "value": "OH_JSVM_ObjectFreeze",
  "id": "oh_jsvm_objectfreeze",
  "level": 3
}, {
  "value": "OH_JSVM_ObjectSeal",
  "id": "oh_jsvm_objectseal",
  "level": 3
}, {
  "value": "OH_JSVM_Typeof",
  "id": "oh_jsvm_typeof",
  "level": 3
}, {
  "value": "OH_JSVM_Instanceof",
  "id": "oh_jsvm_instanceof",
  "level": 3
}, {
  "value": "OH_JSVM_TypeTagObject",
  "id": "oh_jsvm_typetagobject",
  "level": 3
}, {
  "value": "OH_JSVM_CheckObjectTypeTag",
  "id": "oh_jsvm_checkobjecttypetag",
  "level": 3
}, {
  "value": "OH_JSVM_CreateExternal",
  "id": "oh_jsvm_createexternal",
  "level": 3
}, {
  "value": "OH_JSVM_GetValueExternal",
  "id": "oh_jsvm_getvalueexternal",
  "level": 3
}, {
  "value": "OH_JSVM_CreateSymbol",
  "id": "oh_jsvm_createsymbol",
  "level": 3
}, {
  "value": "OH_JSVM_SymbolFor",
  "id": "oh_jsvm_symbolfor",
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
    img: "img",
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
        id: "使用jsvm-api接口进行object相关开发",
        children: "使用JSVM-API接口进行object相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用JSVM-API接口进行object相关开发，处理JavaScript对象的基本操作，例如创建对象、获取原型、冻结和密封对象，检查对象的类型等。这些操作是在处理JavaScript对象时非常常见的，提供了一种与JavaScript对象交互的方式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在JSVM接口开发中，经常需要定义和操作对象。例如，创建一个接口，该接口接受一个对象作为输入参数，对该对象执行某些操作，并返回一个结果对象。在这个过程中，需要确保接口的定义清晰、规范，并且与对象的属性和方法相兼容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "接口（API）"
          })
        }), "：接口定义了组件之间的交互协议，包括输入参数、输出结果以及可能的错误处理。通过接口，组件可以相互调用和交换数据，而无需了解对方的内部实现细节。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "对象（Object）"
          })
        }), "：在JavaScript中，对象是一种复合数据类型，允许存储多个不同类型的值作为一个单独的实体。对象是属性和方法的集合。属性是与对象相关联的值，而方法则是对象可以执行的操作。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_GetPrototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JavaScript对象的原型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个默认的JavaScript Object对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ObjectFreeze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冻结给定的对象，防止向其添加新属性，删除现有属性，防止更改现有属性的可枚举性、可配置性或可写性，并防止更改现有属性的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ObjectSeal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "密封给定的对象。这可以防止向其添加新属性，以及将所有现有属性标记为不可配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_Typeof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回JavaScript对象的类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_Instanceof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断一个对象是否是某个构造函数的实例。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_TypeTagObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将type_tag指针的值与JavaScript对象或外部对象相关联。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CheckObjectTypeTag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "检查给定的类型标签是否与对象上的类型标签匹配。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateSymbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据给定的描述符创建一个Symbol对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_SymbolFor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在全局注册表中搜索具有给定描述的现有Symbol，如果该Symbol已经存在，它将被返回，否则将在注册表中创建一个新Symbol。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateExternal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个包装了外部指针的JavaScript对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetValueExternal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取先前传递给OH_JSVM_CreateExternal的外部数据指针。"
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
      }), "，本文仅对接口对应C++及ArkTS相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getprototype",
      children: "OH_JSVM_GetPrototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该函数用于获取给定JavaScript对象的原型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n#include <fstream>\n#include <string>\n// GetPrototype注册回调\n// OH_JSVM_GetPrototype的样例方法\nstatic JSVM_Value GetPrototype(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value argv[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, argv, nullptr, nullptr);\n    JSVM_Value result{nullptr};\n    JSVM_Status status = OH_JSVM_GetPrototype(env, argv[0], &result);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM GetPrototype fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM GetPrototype success\");\n    }\n    return result;\n}\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetPrototype},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetPrototype方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getPrototype\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char* srcCallNative = R\"JS(const myObject = {};\n    const proto = getPrototype(myObject);\n    console.info(proto === Object.prototype);)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM GetPrototype success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createobject",
      children: "OH_JSVM_CreateObject"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该函数创建一个默认的JavaScript Object对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n#include <fstream>\n// OH_JSVM_CreateObject的样例方法\nstatic JSVM_Value CreateObject(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    JSVM_Value object = nullptr;\n    // 创建一个空对象\n    JSVM_Status status = OH_JSVM_CreateObject(env, &object);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM CreateObject fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM CreateObject success\");\n    }\n    // 设置对象的属性\n    JSVM_Value name = nullptr;\n    // 设置属性名为 \"name\"\n    OH_JSVM_CreateStringUtf8(env, \"name\", JSVM_AUTO_LENGTH, &name);\n    JSVM_Value value = nullptr;\n    // 设置属性值为 \"Hello from N-API!\"\n    OH_JSVM_CreateStringUtf8(env, \"Hello OH_JSVM_CreateObject!\", JSVM_AUTO_LENGTH, &value);\n    // 将属性设置到对象上\n    OH_JSVM_SetProperty(env, object, name, value);\n    return object;\n}\n// CreateObject注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateObject},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateObject方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createObject\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char* srcCallNative = R\"JS(createObject())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM CreateObject success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_objectfreeze",
      children: "OH_JSVM_ObjectFreeze"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "冻结给定的对象，防止向其添加新属性，移除现有属性，防止更改现有属性的可枚举性、可配置性或可写性，并防止更改现有属性的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_ObjectFreeze的样例方法\nstatic JSVM_Value ObjectFreeze(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 接受一个JavaScript侧传入的object\n    size_t argc = 1;\n    JSVM_Value argv[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, argv, nullptr, nullptr);\n    // 调用接口OH_JSVM_ObjectFreeze将传入的object冻结\n    JSVM_Status status = OH_JSVM_ObjectFreeze(env, argv[0]);\n    if (status == JSVM_OK) {\n        OH_LOG_INFO(LOG_APP, \"Test JSVM OH_JSVM_ObjectFreeze success\");\n    }\n    // 测试冻结后的对象中属性能否修改\n    JSVM_Value value = nullptr;\n    OH_JSVM_CreateInt32(env, 111111, &value);\n    OH_JSVM_SetNamedProperty(env, argv[0], \"data\", value);\n    // 将冻结后修改过的属性返回JavaScript侧\n    return argv[0];\n}\n// ObjectFreeze注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = ObjectFreeze},\n};\nstatic JSVM_CallbackStruct *method = param;\n// ObjectFreeze方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"objectFreeze\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char* srcCallNative = R\"JS(let obj = { data: 55, message: \"hello world\"};\n  objectFreeze(obj))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Test JSVM OH_JSVM_ObjectFreeze success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_objectseal",
      children: "OH_JSVM_ObjectSeal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "密封给定的对象。这可以防止向该对象添加新属性，以及将所有现有属性标记为不可配置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_ObjectSeal的样例方法\nstatic JSVM_Value ObjectSeal(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 接受一个JavaScript侧传入的object\n    size_t argc = 1;\n    JSVM_Value argv[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, argv, nullptr, nullptr);\n    // 调用接口OH_JSVM_ObjectSeal将传入的object封闭，使其无法添加新的属性\n    JSVM_Status status = OH_JSVM_ObjectSeal(env, argv[0]);\n    if (status == JSVM_OK) {\n        OH_LOG_INFO(LOG_APP, \"Test JSVM OH_JSVM_ObjectSeal success\");\n    }\n    // 检查封闭后的对象中属性能否修改、删除、新增\n    // 封闭后对象修改\n    JSVM_Value changeValue = nullptr;\n    OH_JSVM_CreateInt32(env, 111111, &changeValue);\n    OH_JSVM_SetNamedProperty(env, argv[0], \"data\", changeValue);\n    // 封闭后对象删除\n    JSVM_Value deleteProperty = nullptr;\n    OH_JSVM_CreateStringUtf8(env, \"message\", JSVM_AUTO_LENGTH, &deleteProperty);\n    bool result = false;\n    OH_JSVM_DeleteProperty(env, argv[0], deleteProperty, &result);\n    if (result) {\n        OH_LOG_INFO(LOG_APP, \"Test JSVM OH_JSVM_ObjectSeal failed\");\n    }\n    // 封闭后对象新增\n    JSVM_Value addValue = nullptr;\n    OH_JSVM_CreateStringUtf8(env, \"addValue\", JSVM_AUTO_LENGTH, &addValue);\n    OH_JSVM_SetNamedProperty(env, argv[0], \"newProperty\", addValue);\n    // 将封闭后改动过的对象返回JavaScript侧\n    return argv[0];\n}\n// ObjectSeal注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = ObjectSeal},\n};\nstatic JSVM_CallbackStruct *method = param;\n// ObjectSeal方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"objectSeal\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char* srcCallNative = R\"JS( let obj = { data: 55, message: \"hello world\"};\n  objectSeal(obj))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Test JSVM OH_JSVM_ObjectSeal success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_typeof",
      children: "OH_JSVM_Typeof"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回JavaScript对象的类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_Typeof的样例方法\nstatic JSVM_Value GetTypeof(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    JSVM_ValueType valueType;\n    OH_JSVM_Typeof(env, args[0], &valueType);\n    JSVM_Value type = nullptr;\n    switch (valueType) {\n        case JSVM_UNDEFINED:\n            OH_LOG_INFO(LOG_APP, \"JSVM Input type is undefined\");\n            OH_JSVM_CreateStringUtf8(env, \"Input type is undefined\", JSVM_AUTO_LENGTH, &type);\n            break;\n        case JSVM_NULL:\n            OH_LOG_INFO(LOG_APP, \"JSVM Input type is null\");\n            OH_JSVM_CreateStringUtf8(env, \"Input type is null\", JSVM_AUTO_LENGTH, &type);\n            break;\n        case JSVM_BOOLEAN:\n            OH_LOG_INFO(LOG_APP, \"JSVM Input type is boolean\");\n            OH_JSVM_CreateStringUtf8(env, \"Input type is boolean\", JSVM_AUTO_LENGTH, &type);\n            break;\n        case JSVM_NUMBER:\n            OH_LOG_INFO(LOG_APP, \"JSVM Input type is number\");\n            OH_JSVM_CreateStringUtf8(env, \"Input type is number\", JSVM_AUTO_LENGTH, &type);\n            break;\n        case JSVM_STRING:\n            OH_LOG_INFO(LOG_APP, \"JSVM Input type is string\");\n            OH_JSVM_CreateStringUtf8(env, \"Input type is string\", JSVM_AUTO_LENGTH, &type);\n            break;\n        case JSVM_SYMBOL:\n            OH_LOG_INFO(LOG_APP, \"JSVM Input type is symbol\");\n            OH_JSVM_CreateStringUtf8(env, \"Input type is symbol\", JSVM_AUTO_LENGTH, &type);\n            break;\n        case JSVM_OBJECT:\n            OH_LOG_INFO(LOG_APP, \"JSVM Input type is object\");\n            OH_JSVM_CreateStringUtf8(env, \"Input type is object\", JSVM_AUTO_LENGTH, &type);\n            break;\n        case JSVM_FUNCTION:\n            OH_LOG_INFO(LOG_APP, \"JSVM Input type is function\");\n            OH_JSVM_CreateStringUtf8(env, \"Input type is function\", JSVM_AUTO_LENGTH, &type);\n            break;\n        case JSVM_EXTERNAL:\n            OH_LOG_INFO(LOG_APP, \"JSVM Input type is external\");\n            OH_JSVM_CreateStringUtf8(env, \"Input type is external\", JSVM_AUTO_LENGTH, &type);\n            break;\n        case JSVM_BIGINT:\n            OH_LOG_INFO(LOG_APP, \"JSVM Input type is bigint\");\n            OH_JSVM_CreateStringUtf8(env, \"Input type is bigint\", JSVM_AUTO_LENGTH, &type);\n            break;\n        default:\n            OH_LOG_INFO(LOG_APP, \"JSVM Input type does not match any\");\n            OH_JSVM_CreateStringUtf8(env, \" \", JSVM_AUTO_LENGTH, &type);\n            break;\n    }\n    return type;\n}\n// GetTypeof注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetTypeof},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetTypeof方法别名，TS侧调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getTypeof\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char* srcCallNative = R\"JS(getTypeof(true);)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM Input type is boolean\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_instanceof",
      children: "OH_JSVM_Instanceof"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断一个对象是否是某个构造函数的实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_Instanceof的样例方法\nstatic JSVM_Value InstanceOf(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获取两个JavaScript侧传入的参数\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    bool result = false;\n    JSVM_Status status = OH_JSVM_Instanceof(env, args[0], args[1], &result);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM InstanceOf fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM InstanceOf：%{public}d\", result);\n    }\n    JSVM_Value returnValue = nullptr;\n    OH_JSVM_GetBoolean(env, result, &returnValue);\n    return returnValue;\n}\n// InstanceOf注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = InstanceOf},\n};\nstatic JSVM_CallbackStruct *method = param;\n// InstanceOf方法别名，TS侧调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"instanceOf\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char* srcCallNative = R\"JS(class Person {\n        name;\n        age;\n        constructor(name, age) {\n          this.name = name;\n          this.age = age;\n        }\n      }\n     instanceOf(new Person('Alice', 30), Person);\n     ;)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM InstanceOf：1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_typetagobject",
      children: "OH_JSVM_TypeTagObject"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用类型标签type_tag来标记JavaScript对象，这样在后续操作中可以更精确地识别JavaScript对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_checkobjecttypetag",
      children: "OH_JSVM_CheckObjectTypeTag"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查给定的类型标签是否与对象上的类型标签匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n#define NUMBERINT_FOUR 4\n// 定义一个静态常量JSVM_TypeTag数组存储类型标签\nstatic const JSVM_TypeTag TagsData[NUMBERINT_FOUR] = {\n    {0x9e4b2449547061b3, 0x33999f8a6516c499},\n    {0x1d55a794c53a726d, 0x43633f509f9c944e},\n    {0, 0}, // 用于表示无标签或默认标签\n    {0x6a971439f5b2e5d7, 0x531dc28a7e5317c0},\n};\n// OH_JSVM_TypeTagObject的样例方法\nstatic JSVM_Value SetTypeTagToObject(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获取两个JavaScript侧传入的参数\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 获取索引数字转换为JSVM_Value\n    int32_t index = 0;\n    OH_JSVM_GetValueInt32(env, args[1], &index);\n    // 给参数（对象）设置类型标签\n    JSVM_Status status = OH_JSVM_TypeTagObject(env, args[0], &TagsData[index]);\n    // 将bool结果转换为JSVM_Value并返回\n    JSVM_Value result = nullptr;\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM SetTypeTagToObject fail\");\n        OH_JSVM_GetBoolean(env, false, &result);\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM SetTypeTagToObject success\");\n        OH_JSVM_GetBoolean(env, true, &result);\n    }\n    return result;\n}\n// OH_JSVM_CheckObjectTypeTag的样例方法\nstatic JSVM_Value CheckObjectTypeTag(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获取两个JavaScript侧传入的参数\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 获取索引数字转换为JSVM_Value\n    int32_t index = 0;\n    OH_JSVM_GetValueInt32(env, args[1], &index);\n    // 检查对象的类型标签\n    bool checkResult = false;\n    JSVM_Status status = OH_JSVM_CheckObjectTypeTag(env, args[0], &TagsData[index], &checkResult);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM CheckObjectTypeTag fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM CheckObjectTypeTag:%{public}d\", checkResult);\n    }\n    // 将bool结果转换为JSVM_Value并返回\n    JSVM_Value checked = nullptr;\n    OH_JSVM_GetBoolean(env, checkResult, &checked);\n    return checked;\n}\n// SetTypeTagToObject，CheckObjectTypeTag注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = SetTypeTagToObject},\n    {.data = nullptr, .callback = CheckObjectTypeTag},\n};\nstatic JSVM_CallbackStruct *method = param;\n// SetTypeTagToObject，CheckObjectTypeTag方法别名，TS侧调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"setTypeTagToObject\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n    {\"checkObjectTypeTag\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char* srcCallNative = R\"JS(\n         class Obj {\n           data;\n           message;\n         }\n         let obj= { data: 0, message: \"hello world\"};\n         setTypeTagToObject(obj, 0);\n         checkObjectTypeTag(obj,0);)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM SetTypeTagToObject success\nJSVM CheckObjectTypeTag:1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createexternal",
      children: "OH_JSVM_CreateExternal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个包装了外部指针的JavaScript对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(26887)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JavaScript对象被垃圾回收时，包装的外部指针指向的内容不被GC直接管理，仅调用传入的第三个参数对应的函数（如果传入时不为nullptr）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n#include <fstream>\n// OH_JSVM_CreateExternal的样例方法\nstatic JSVM_Value CreateExternal(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    size_t dataSize = 10;\n    void *data = malloc(dataSize);\n    if (data == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM Failed to malloc.\");\n        return nullptr;\n    }\n    memset(data, 0, dataSize);\n    const char* testStr = \"test\";\n    JSVM_Value external = nullptr;\n    JSVM_Status status = OH_JSVM_CreateExternal(\n        env, data, [](JSVM_Env env, void *data, void *hint) {free(data);}, (void *)testStr, &external);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM Failed to create external data, status:%{public}d.\", status);\n        free(data);\n        data = nullptr;\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM CreateExternal success\");\n    }\n    return external;\n}\n// CreateExternal注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateExternal},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateExternal方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createExternal\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char* srcCallNative = R\"JS(createExternal())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM CreateExternal success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getvalueexternal",
      children: "OH_JSVM_GetValueExternal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OH_JSVM_CreateExternal可以创建并包装自定义的C/C++对象，并将其公开给JavaScript代码，而OH_JSVM_GetValueExternal则用于获取OH_JSVM_CreateExternal所包装的外部对象的指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_GetValueExternal的样例方法\nstatic JSVM_Value GetValueExternal(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    static int data = 0x12345;\n    JSVM_Value externalValue = nullptr;\n    JSVM_Status status = OH_JSVM_CreateExternal(env, (void*)&data, nullptr, nullptr, &externalValue);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_CreateExternal fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_CreateExternal success\");\n    }\n    void *data_value;\n    status = OH_JSVM_GetValueExternal(env, externalValue, &data_value);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM GetValueExternal fail\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM GetValueExternal success\");\n    }\n    // 将符号位转化为int类型传出去\n    JSVM_Value returnValue = nullptr;\n    int retData = *static_cast<int *>(data_value);\n    OH_JSVM_CreateInt32(env, retData, &returnValue);\n    return returnValue;\n}\n// GetValueExternal注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetValueExternal},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetValueExternal方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getValueExternal\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char* srcCallNative = R\"JS(getValueExternal())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_CreateExternal success\nJSVM GetValueExternal success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createsymbol",
      children: "OH_JSVM_CreateSymbol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于创建一个新的Symbol。Symbol是一种特殊的数据类型，用于表示唯一的标识符。与字符串或数字不同，符号的值是唯一的，即使两个符号具有相同的描述，它们也是不相等的。符号通常用作对象属性的键，以确保属性的唯一性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// OH_JSVM_CreateSymbol的样例方法\nstatic JSVM_Value CreateSymbol(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    JSVM_Value result = nullptr;\n    const char *des = \"only\";\n    OH_JSVM_CreateStringUtf8(env, des, JSVM_AUTO_LENGTH, &result);\n    JSVM_Value returnSymbol = nullptr;\n    OH_JSVM_CreateSymbol(env, result, &returnSymbol);\n    JSVM_ValueType valuetypeSymbol;\n    OH_JSVM_Typeof(env, returnSymbol, &valuetypeSymbol);\n    if (valuetypeSymbol == JSVM_SYMBOL) {\n        OH_LOG_INFO(LOG_APP, \"JSVM CreateSymbol Success\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM CreateSymbol fail\");\n    }\n    return returnSymbol;\n}\n// CreateSymbol注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateSymbol},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateSymbol方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createSymbol\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char* srcCallNative = R\"JS(createSymbol())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM CreateSymbol Success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_symbolfor",
      children: "OH_JSVM_SymbolFor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在全局注册表中搜索具有给定描述的现有Symbol，如果该Symbol已经存在，它将被返回，否则将在注册表中创建一个新Symbol。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include \"napi/native_api.h\"\n#include \"ark_runtime/jsvm.h\"\n#include <hilog/log.h>\n// 定义一个常量，用于存储最大字符串长度\nstatic const int MAX_BUFFER_SIZE = 128;\n// OH_JSVM_SymbolFor的样例方法\nstatic JSVM_Value SymbolFor(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    JSVM_Value description = nullptr;\n    OH_JSVM_CreateStringUtf8(env, \"test_demo\", 9, &description);\n    char buffer[MAX_BUFFER_SIZE];\n    size_t bufferSize = MAX_BUFFER_SIZE;\n    size_t copied = 0;\n    OH_JSVM_GetValueStringUtf8(env, description, buffer, bufferSize, &copied);\n    JSVM_Value symbol = nullptr;\n    OH_JSVM_CreateSymbol(env, description, &symbol);\n    JSVM_Value result_symbol = nullptr;\n    JSVM_Status status = OH_JSVM_SymbolFor(env, buffer, copied, &result_symbol);\n    JSVM_ValueType valuetypeSymbol;\n    OH_JSVM_Typeof(env, result_symbol, &valuetypeSymbol);\n    if (valuetypeSymbol == JSVM_SYMBOL && status == JSVM_OK) {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_SymbolFor success\");\n    }\n    // 返回结果\n    return result_symbol;\n}\n// SymbolFor注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = SymbolFor},\n};\nstatic JSVM_CallbackStruct *method = param;\n// SymbolFor方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"symbolFor\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char* srcCallNative = R\"JS(symbolFor())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_SymbolFor success\n"
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
26887(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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