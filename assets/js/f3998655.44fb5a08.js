"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["617773"], {
927131(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_property_use_jsvm_about_property_md_f39_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-property-use-jsvm-about-property-md-f39.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_property_use_jsvm_about_property_md_f39_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-property/use-jsvm-about-property","title":"使用JSVM-API接口设置JavaScript对象的属性","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-property/use-jsvm-about-property.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-property","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-property/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-property/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"title":"使用JSVM-API接口设置JavaScript对象的属性","sidebar_position":15,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-property","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口处理异步操作","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-promise/"},"next":{"title":"使用JSVM-API接口创建和获取string值","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-string/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-property/use-jsvm-about-property.md


const frontMatter = {
	title: '使用JSVM-API接口设置JavaScript对象的属性',
	sidebar_position: 15,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-property',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口设置JavaScript对象的属性';

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
  "value": "OH_JSVM_GetPropertyNames",
  "id": "oh_jsvm_getpropertynames",
  "level": 3
}, {
  "value": "OH_JSVM_SetProperty",
  "id": "oh_jsvm_setproperty",
  "level": 3
}, {
  "value": "OH_JSVM_GetProperty",
  "id": "oh_jsvm_getproperty",
  "level": 3
}, {
  "value": "OH_JSVM_HasProperty",
  "id": "oh_jsvm_hasproperty",
  "level": 3
}, {
  "value": "OH_JSVM_DeleteProperty",
  "id": "oh_jsvm_deleteproperty",
  "level": 3
}, {
  "value": "OH_JSVM_HasOwnProperty",
  "id": "oh_jsvm_hasownproperty",
  "level": 3
}, {
  "value": "OH_JSVM_SetNamedProperty",
  "id": "oh_jsvm_setnamedproperty",
  "level": 3
}, {
  "value": "OH_JSVM_GetNamedProperty",
  "id": "oh_jsvm_getnamedproperty",
  "level": 3
}, {
  "value": "OH_JSVM_HasNamedProperty",
  "id": "oh_jsvm_hasnamedproperty",
  "level": 3
}, {
  "value": "OH_JSVM_DefineProperties",
  "id": "oh_jsvm_defineproperties",
  "level": 3
}, {
  "value": "OH_JSVM_GetAllPropertyNames",
  "id": "oh_jsvm_getallpropertynames",
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
        id: "使用jsvm-api接口设置javascript对象的属性",
        children: "使用JSVM-API接口设置JavaScript对象的属性"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用JSVM-API接口获取和设置JavaScript对象的属性。通过合理使用这些函数，实现更复杂的功能和逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在JavaScript对象属性的相关开发中，需要处理JavaScript对象属性，确保正确地访问、设置、删除属性，并了解属性的继承关系和枚举特性。以下是一些关键概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "对象（Object）"
          })
        }), "：在JavaScript中，对象是一种复合数据类型，它允许存储多个不同类型的值作为一个单独的实体。对象是属性和方法的集合。属性是与对象相关联的值，而方法则是对象可以执行的操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "属性（Property）"
          })
        }), "：在JavaScript中，属性是对象特征的键值对。每个属性都有一个名字（也称为键或标识符）和一个值。属性的值可以是任意数据类型，包括基本类型、对象和函数。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "可枚举属性（EnumerableProperty）"
          })
        }), "：在JavaScript中，对象的属性分为可枚举和不可枚举之分，它们是由属性的enumerable值决定的，即内部 “可枚举” 标志设置为true或false。可枚举性决定了属性是否能被 for...in 遍历到。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "自有属性（OwnProperty）"
          })
        }), "：自有属性是直接定义在对象上的属性，而不是从原型链继承的。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_GetPropertyNames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定对象的所有可枚举属性名称，结果变量将存储一个包含所有可枚举属性名称的JavaScript数组"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_SetProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为给定对象设置一个属性"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用给定的属性的名称，检索目标对象的属性"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_HasProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用给定的属性的名称，查询目标对象是否有此属性"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_DeleteProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用给定的属性的名称，删除目标对象属性"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_HasOwnProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断给定Object中是否有指定名称的own property。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_SetNamedProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用给定的属性的名称为目标对象设置属性，此方法等效于调用OH_JSVM_SetProperty， 其中，通过utf8Name传入的字符串用于创建JSVM_Value。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetNamedProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用给定的属性的名称，检索目标对象的属性，此方法等效于调用OH_JSVM_GetProperty， 其中，通过utf8Name传入的字符串用于创建JSVM_Value。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_HasNamedProperty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用给定的属性的名称，查询目标对象是否有此属性，此方法等效于使用从作为utf8Name传入的字符串创建的JSVM_Value调用OH_JSVM_HasProperty。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_DefineProperties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "批量的向给定对象中定义属性"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetAllPropertyNames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定对象的所有可用属性名称，结果变量将存储一个包含所有可枚举属性名称的JavaScript数组"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/jsvm/use-jsvm-process",
        children: "使用JSVM-API实现JS与C/C++语言交互开发流程"
      }), "，本文仅展示接口对应的C++代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getpropertynames",
      children: "OH_JSVM_GetPropertyNames"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以字符串数组的形式获取对象的可枚举属性的名称，如果接口调用成功则返回JSVM_OK。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// OH_JSVM_GetPropertyNames的样例方法\nstatic JSVM_Value GetPropertyNames(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 将obj作为参数传入\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 以字符串数组的形式获取对象的可枚举属性的名称，以result传出\n    JSVM_Value result = nullptr;\n    JSVM_Status status = OH_JSVM_GetPropertyNames(env, args[0], &result);\n    if (status != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"Failed to get property names\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_GetPropertyNames success\");\n    }\n    return result;\n}\n// GetPropertyNames注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetPropertyNames},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetPropertyNames方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getPropertyNames\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n    let obj = '{ data: 0, message: \"hello world\"}';\n    let script = getPropertyNames(obj);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_GetPropertyNames success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_setproperty",
      children: "OH_JSVM_SetProperty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将给定的属性与值设置入给定的Object。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// OH_JSVM_SetProperty的样例方法\nstatic JSVM_Value SetProperty(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 接收js侧传入的三个参数：第一个参数为想要设置的object，第二个参数为属性，第三个参数为属性对应的值\n    size_t argc = 3;\n    JSVM_Value args[3] = {nullptr};\n    JSVM_Status status = OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    if (status != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"JSVM OH_JSVM_GetCbInfo fail\");\n        return nullptr;\n    }\n    // 通过调用OH_JSVM_SetProperty接口将属性与值设置入object如果失败，直接抛出错误\n    status = OH_JSVM_SetProperty(env, args[0], args[1], args[2]);\n    if (status != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"JSVM OH_JSVM_SetProperty fail\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_SetProperty success\");\n    }\n    // 将设置成功后的object返回出去\n    return args[0];\n}\n// SetProperty注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = SetProperty},\n};\nstatic JSVM_CallbackStruct *method = param;\n// SetProperty方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"setProperty\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n    let obj = { data: 0, message: \"hello world\", 50: 1};\n    setProperty(obj, \"code\", \"hi\")\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_SetProperty success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getproperty",
      children: "OH_JSVM_GetProperty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取给定Object的给定属性对应的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// OH_JSVM_GetProperty的样例方法\nstatic JSVM_Value GetProperty(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 接收两个js传来的参数\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 传入的第一个参数为要检测的object，第二个对象为要检测的属性，通过调用OH_JSVM_GetProperty接口获取对应的值\n    JSVM_Value result = nullptr;\n    JSVM_Status status = OH_JSVM_GetProperty(env, args[0], args[1], &result);\n    if (status != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"JSVM OH_JSVM_GetProperty fail\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_GetProperty success\");\n    }\n    return result;\n}\n// GetProperty注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetProperty},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetProperty方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getProperty\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n    let obj = { data: 0, message: \"hello world\", 50: 1};\n    getProperty(obj, \"message\")\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_GetProperty success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_hasproperty",
      children: "OH_JSVM_HasProperty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查对象中是否存在指定的属性，可以避免访问不存在属性导致的异常或错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// OH_JSVM_HasProperty的样例方法\nstatic JSVM_Value HasProperty(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 从js侧传入两个参数：第一个参数为要检验的对象，第二个参数为要检测是否存在对象的属性\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 将参数传入OH_JSVM_HasProperty方法中，若接口调用成功则将结果转化为JSVM_Value类型抛出，否则抛出错误\n    bool result = false;\n    JSVM_Status status = OH_JSVM_HasProperty(env, args[0], args[1], &result);\n    if (status != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"JSVM OH_JSVM_HasProperty fail\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_HasProperty success:%{public}d\", result);\n    }\n    // 若传入属性存在传入对象中，则输出true将结果转化为JSVM_Value类型抛出\n    JSVM_Value returnResult = nullptr;\n    OH_JSVM_GetBoolean(env, result, &returnResult);\n    return returnResult;\n}\n// HasProperty注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = HasProperty},\n};\nstatic JSVM_CallbackStruct *method = param;\n// HasProperty方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"hasProperty\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n    let obj = { data: 0, message: \"hello world\", 50: 1};\n    hasProperty(obj, \"data\")\n    hasProperty(obj, 0)\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hasProperty(obj, \"data\")输出\nJSVM OH_JSVM_HasProperty success:1\n// hasProperty(obj, 0)输出\nJSVM OH_JSVM_HasProperty success:0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_deleteproperty",
      children: "OH_JSVM_DeleteProperty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "尝试从给定的Object中删除由key指定的属性，并返回操作的结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果对象是一个不可扩展的对象，或者属性是不可配置的，则可能无法删除该属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// OH_JSVM_DeleteProperty的样例方法\nstatic JSVM_Value DeleteProperty(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获取js侧传入的两个参数\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    JSVM_ValueType valueType;\n    OH_JSVM_Typeof(env, args[0], &valueType);\n    if (valueType != JSVM_OBJECT) {\n        OH_JSVM_ThrowError(env, nullptr, \"Expects an object as argument.\");\n        return nullptr;\n    }\n    // 从传入的Object对象中删除指定属性，返回是否删除成功的bool结果值\n    bool result = false;\n    JSVM_Status status = OH_JSVM_DeleteProperty(env, args[0], args[1], &result);\n    if (status != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"JSVM OH_JSVM_DeleteProperty failed\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_DeleteProperty success:%{public}d\", result);\n    }\n    // 将bool结果转换为JSVM_value并返回\n    JSVM_Value ret;\n    OH_JSVM_GetBoolean(env, result, &ret);\n    return ret;\n}\n// DeleteProperty注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = DeleteProperty},\n};\nstatic JSVM_CallbackStruct *method = param;\n// DeleteProperty方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"deleteProperty\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n    let obj = { data: 0, message: \"hello world\", 50: 1};\n    deleteProperty(obj, \"message\")\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_DeleteProperty success:1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_hasownproperty",
      children: "OH_JSVM_HasOwnProperty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于检查传入的Object是否具有自己的命名属性，不包括从原型链上继承的属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// OH_JSVM_HasOwnProperty的样例方法\nstatic JSVM_Value HasOwnProperty(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获取js侧传入的两个参数\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 检查第一个参数是否为对象\n    JSVM_ValueType valueType1;\n    OH_JSVM_Typeof(env, args[0], &valueType1);\n    if (valueType1 != JSVM_OBJECT) {\n        OH_JSVM_ThrowError(env, nullptr, \"First argument must be an object.\");\n        return nullptr;\n    }\n    // 检查第二个参数是否为string\n    JSVM_ValueType valuetype2;\n    OH_JSVM_Typeof(env, args[1], &valuetype2);\n    if (valuetype2 != JSVM_STRING ) {\n        OH_JSVM_ThrowError(env, nullptr, \"Second argument must be a string.\");\n        return nullptr;\n    }\n    // 检查对象是否具有指定属性，结果存储在hasProperty中\n    bool hasProperty = false;\n    JSVM_Status status = OH_JSVM_HasOwnProperty(env, args[0], args[1], &hasProperty);\n    if (status != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"JSVM OH_JSVM_HasOwnProperty failed\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_HasOwnProperty success:%{public}d\", hasProperty);\n    }\n    // 将bool结果转换为JSVM_Value并返回\n    JSVM_Value result;\n    OH_JSVM_GetBoolean(env, hasProperty, &result);\n    return result;\n}\n// HasOwnProperty注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = HasOwnProperty},\n};\nstatic JSVM_CallbackStruct *method = param;\n// HasOwnProperty方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"hasOwnProperty\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n    let obj = { data: 0, message: \"hello world\", 50: 1};\n    hasOwnProperty(obj, \"message\")\n    hasOwnProperty(obj, \"__defineGetter__\")\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hasOwnProperty(obj, \"message\")输出\nJSVM OH_JSVM_HasOwnProperty success:1\n// hasOwnProperty(obj, \"__defineGetter__\")输出\n// `__defineGetter__`为Object原型方法，非OwnProperty，预期返回0\nJSVM OH_JSVM_HasOwnProperty success:0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_setnamedproperty",
      children: "OH_JSVM_SetNamedProperty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于在传入的Javascript对象上设置一个命名属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// OH_JSVM_SetNamedProperty的样例方法\nstatic JSVM_Value SetNamedProperty(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获取js侧传入的一个参数\n    size_t argc = 1;\n    JSVM_Value str;\n    char strKey[32] = \"\";\n    OH_JSVM_GetCbInfo(env, info, &argc, &str, nullptr, nullptr);\n    // 获取传入参数字符串并存储在strKey中\n    size_t keyLength = 0;\n    OH_JSVM_GetValueStringUtf8(env, str, strKey, 32, &keyLength);\n    // 创建一个新对象\n    JSVM_Value newObj;\n    OH_JSVM_CreateObject(env, &newObj);\n    // 设置整数值1234为属性值\n    int32_t value = 1234;\n    JSVM_Value numValue;\n    OH_JSVM_CreateInt32(env, value, &numValue);\n    // 将整数值与指定属性名关联\n    JSVM_Status status = OH_JSVM_SetNamedProperty(env, newObj, strKey, numValue);\n    if (status != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"JSVM OH_JSVM_SetNamedProperty failed\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_SetNamedProperty success\");\n    }\n    // 返回新创建并设置命名属性的对象\n    return newObj;\n}\n// SetNamedProperty注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = SetNamedProperty},\n};\nstatic JSVM_CallbackStruct *method = param;\n// SetNamedProperty方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"setNamedProperty\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n    setNamedProperty(\"message\")\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_SetNamedProperty success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getnamedproperty",
      children: "OH_JSVM_GetNamedProperty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于从Javascript对象中获取命名属性的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// OH_JSVM_GetNamedProperty的样例方法\nstatic JSVM_Value GetNamedProperty(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获取js侧传入的两个参数\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    char strKey[32] = \"\";\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 获取要获取的属性名\n    size_t keyLength = 0;\n    OH_JSVM_GetValueStringUtf8(env, args[1], strKey, 32, &keyLength);\n    // 获取指定属性的值并存储在result中\n    JSVM_Value result;\n    JSVM_Status status = OH_JSVM_GetNamedProperty(env, args[0], strKey, &result);\n    if (status != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"JSVM OH_JSVM_GetNamedProperty failed\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_GetNamedProperty success\");\n    }\n    return result;\n}\n// GetNamedProperty注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetNamedProperty},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetNamedProperty方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getNamedProperty\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n    let obj = { data: 0, message: \"hello world\", 50: 1};\n    getNamedProperty(obj, \"message\")\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_GetNamedProperty success\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_hasnamedproperty",
      children: "OH_JSVM_HasNamedProperty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于检查Javascript对象中是否包含指定的命名属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// OH_JSVM_HasNamedProperty的样例方法\nstatic JSVM_Value HasNamedProperty(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获取js侧传入的两个参数\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    char strKey[32] = \"\";\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 获取要检查的属性名\n    size_t keyLength = 0;\n    OH_JSVM_GetValueStringUtf8(env, args[1], strKey, 32, &keyLength);\n    // 检查对象是否具有指定命名的属性，并将结果存储在hasProperty中\n    bool hasProperty = false;\n    JSVM_Status status = OH_JSVM_HasNamedProperty(env, args[0], strKey, &hasProperty);\n    if (status != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"JSVM OH_JSVM_HasNamedProperty failed\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_HasNamedProperty success:%{public}d\", hasProperty);\n    }\n    // 将bool结果转换为JSVM_Value并返回\n    JSVM_Value result;\n    OH_JSVM_GetBoolean(env, hasProperty, &result);\n    return result;\n}\n// HasNamedProperty注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = HasNamedProperty},\n};\nstatic JSVM_CallbackStruct *method = param;\n// HasNamedProperty方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"hasNamedProperty\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n    let obj = { data: 0, message: \"hello world\", 50: 1};\n    hasNamedProperty(obj, \"message\")\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_HasNamedProperty success:1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_defineproperties",
      children: "OH_JSVM_DefineProperties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于定义对象的自定义属性，可一次性为对象设置若干个属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <fstream>\n#include <string>\n// 属性描述符列表中defineMethodPropertiesExample属性的回调函数\nstatic JSVM_Value DefineMethodPropertiesExample(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    int32_t propValue = 26;\n    JSVM_Value returnValue;\n    OH_JSVM_CreateInt32(env, propValue, &returnValue);\n    return returnValue;\n}\n// 属性描述符列表中getterCallback属性的回调函数\nstatic JSVM_Value GetterCallback(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    JSVM_Value result;\n    const char *str = \"Hello world!\";\n    size_t length = strlen(str);\n    // 创建属性的值\n    OH_JSVM_CreateStringUtf8(env, str, length, &result);\n    return result;\n}\n\n// 执行JavaScript字符串的函数\nstatic JSVM_Value RunScriptAndLogResult(JSVM_Env env, const std::string &srcCode) {\n    JSVM_Value sourceCodeValue;\n    OH_JSVM_CreateStringUtf8(env, srcCode.c_str(), srcCode.size(), &sourceCodeValue);\n    JSVM_Script script;\n    // 编译JavaScript代码字符串并返回编译后的脚本\n    OH_JSVM_CompileScript(env, sourceCodeValue, nullptr, 0, true, nullptr, &script);\n    JSVM_Value jsVmResult;\n    // 执行JavaScript代码字符串\n    OH_JSVM_RunScript(env, script, &jsVmResult);\n    return jsVmResult;\n}\n\n// OH_JSVM_DefineProperties的样例方法\nstatic JSVM_Value DefineProperties(JSVM_Env env, JSVM_CallbackInfo info) {\n    // 接受一个JavaScript侧传入的空object\n    size_t argc = 1;\n    JSVM_Value argv[1] = {nullptr};\n    OH_JSVM_GetCbInfo(env, info, &argc, argv, nullptr, nullptr);\n    // 创建一个string类型的属性值\n    JSVM_Value stringValue;\n    OH_JSVM_CreateStringUtf8(env, \"Hello!\", JSVM_AUTO_LENGTH, &stringValue);\n    // 创建属性描述符对应的回调函数列表\n    JSVM_CallbackStruct param[] = {\n        {.data = nullptr, .callback = DefineMethodPropertiesExample},\n        {.data = nullptr, .callback = GetterCallback},\n\n    };\n    // 创建属性描述符列表，不同类型属性值添加位置参考JSVM_PropertyDescriptor定义\n    JSVM_PropertyDescriptor descriptor[] = {\n        // 定义method类型的属性值\n        {\"defineMethodPropertiesExample\", nullptr, &param[0], nullptr, nullptr, nullptr, JSVM_DEFAULT},\n        // 定义string类型的属性值\n        {\"defineStringPropertiesExample\", nullptr, nullptr, nullptr, nullptr, stringValue, JSVM_DEFAULT},\n        // 定义getter类型的属性值\n        {\"getterCallback\", nullptr, nullptr, &param[1], nullptr, nullptr,JSVM_DEFAULT}};\n    // 根据属性描述符列表为obj对象创建属性\n    JSVM_Status statusProperty;\n    statusProperty = OH_JSVM_DefineProperties(env, *argv, sizeof(descriptor) / sizeof(descriptor[0]), descriptor);\n    if (statusProperty != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"JSVM DefineProperties fail\");\n        return nullptr;\n    }\n    // 调用obj对象中添加的属性\n    // 运行obj.defineMethodPropertiesExample()并将结果返回给JavaScript\n    static std::string srcMethod;\n    srcMethod = R\"JS(obj.defineMethodPropertiesExample();)JS\";\n    JSVM_Value jsVmResult = RunScriptAndLogResult(env, srcMethod);\n    if (jsVmResult != nullptr) {\n        int32_t number;\n        OH_JSVM_GetValueInt32(env, jsVmResult, &number);\n        OH_LOG_INFO(LOG_APP, \"JSVM DefineMethodPropertiesExample success:%{public}d\", number);\n    }\n    // 运行obj.defineStringPropertiesExample()并将结果返回给JavaScript\n    static std::string srcString;\n    srcString = R\"JS(obj.defineStringPropertiesExample;)JS\";\n    JSVM_Value jsVmResult1 = RunScriptAndLogResult(env, srcString);\n    if (jsVmResult1 != nullptr) {\n        size_t length = 0;\n        OH_JSVM_GetValueStringUtf8(env, jsVmResult1, nullptr, 0, &length);\n        char *buf = (char *)malloc(length + 1);\n        if (buf == nullptr) {\n            OH_LOG_ERROR(LOG_APP, \"malloc failed\");\n            return nullptr;\n        }\n        memset(buf, 0, length + 1);\n        OH_JSVM_GetValueStringUtf8(env, jsVmResult1, buf, length + 1, &length);\n        OH_LOG_INFO(LOG_APP, \"JSVM defineStringPropertiesExample success:%{public}s\", buf);\n        free(buf);\n    }\n    // 调用obj的getterCallback()并将结果字符串返回给JavaScript\n    static std::string srcGetter;\n    srcGetter = R\"JS(obj.getterCallback;)JS\";\n    JSVM_Value jsVmResult2 = RunScriptAndLogResult(env, srcGetter);\n    if (jsVmResult2 != nullptr) {\n        size_t length = 0;\n        OH_JSVM_GetValueStringUtf8(env, jsVmResult2, nullptr, 0, &length);\n        char *buf = (char *)malloc(length + 1);\n        if (buf == nullptr) {\n            OH_LOG_ERROR(LOG_APP, \"malloc failed\");\n            return nullptr;\n        }\n        memset(buf, 0, length + 1);\n        OH_JSVM_GetValueStringUtf8(env, jsVmResult2, buf, length + 1, &length);\n        OH_LOG_INFO(LOG_APP, \"JSVM getterCallback success:%{public}s\", buf);\n        free(buf);\n    }\n    return jsVmResult;\n}\n\n// DefineProperties注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = DefineProperties},\n};\nstatic JSVM_CallbackStruct *method = param;\n// DefineProperties方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"defineProperties\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n    let obj = {};\n    defineProperties(obj)\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM DefineMethodPropertiesExample success:26\nJSVM defineStringPropertiesExample success:Hello!\nJSVM getterCallback success:Hello world!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getallpropertynames",
      children: "OH_JSVM_GetAllPropertyNames"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取给定对象的所有可枚举属性名称，结果变量将存储一个包含这些属性名称的JavaScript数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// OH_JSVM_GetAllPropertyNames的样例方法\nstatic JSVM_Value GetAllPropertyNames(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 获取js侧传入的一个参数\n    size_t argc = 1;\n    JSVM_Value args[1];\n    OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr);\n    // 获取给定对象的所有属性名称(自有属性)\n    JSVM_Value result;\n    JSVM_Status status = OH_JSVM_GetAllPropertyNames(env, args[0],\n                                         JSVM_KeyCollectionMode::JSVM_KEY_OWN_ONLY,\n                                         JSVM_KeyFilter::JSVM_KEY_WRITABLE,\n                                         JSVM_KeyConversion::JSVM_KEY_NUMBERS_TO_STRINGS, &result);\n    if (status != JSVM_OK) {\n        OH_JSVM_ThrowError(env, nullptr, \"Failed to get all property names\");\n        return nullptr;\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_GetAllPropertyNames success\");\n    }\n    return result;\n}\n// GetAllPropertyNames注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetAllPropertyNames},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetAllPropertyNames方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getAllPropertyNames\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试js\nconst char *srcCallNative = R\"JS(\n    let obj = '{ data: 0, message: \"hello world\", 50: 1}';\n    let script = getAllPropertyNames(obj);\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_GetAllPropertyNames success\n"
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