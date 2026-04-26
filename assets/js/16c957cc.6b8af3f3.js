"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["314581"], {
618441(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_primitive_use_napi_about_primitive_md_16c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-about-primitive-use-napi-about-primitive-md-16c.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_primitive_use_napi_about_primitive_md_16c_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-primitive/use-napi-about-primitive","title":"使用Node-API接口进行primitive类相关开发","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-primitive/use-napi-about-primitive.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-primitive","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-primitive/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-primitive/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"title":"使用Node-API接口进行primitive类相关开发","sidebar_position":16,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-primitive","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API其他实用接口","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-other-practical-tools/"},"next":{"title":"使用Node-API接口处理异步操作","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-promise/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-primitive/use-napi-about-primitive.md


const frontMatter = {
	title: '使用Node-API接口进行primitive类相关开发',
	sidebar_position: 16,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-primitive',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口进行primitive类相关开发';

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
  "value": "场景和功能介绍",
  "id": "场景和功能介绍",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
  "level": 2
}, {
  "value": "napi_coerce_to_bool",
  "id": "napi_coerce_to_bool",
  "level": 3
}, {
  "value": "napi_coerce_to_number",
  "id": "napi_coerce_to_number",
  "level": 3
}, {
  "value": "napi_coerce_to_object",
  "id": "napi_coerce_to_object",
  "level": 3
}, {
  "value": "napi_coerce_to_string",
  "id": "napi_coerce_to_string",
  "level": 3
}, {
  "value": "napi_get_boolean",
  "id": "napi_get_boolean",
  "level": 3
}, {
  "value": "napi_get_value_bool",
  "id": "napi_get_value_bool",
  "level": 3
}, {
  "value": "napi_get_global",
  "id": "napi_get_global",
  "level": 3
}, {
  "value": "napi_get_null",
  "id": "napi_get_null",
  "level": 3
}, {
  "value": "napi_get_undefined",
  "id": "napi_get_undefined",
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
        id: "使用node-api接口进行primitive类相关开发",
        children: "使用Node-API接口进行primitive类相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Node-API接口，开发人员可以在Node-API模块中与ArkTS对象交互，进行数据转换和获取特定对象。这些操作在不同场景中发挥重要作用，使开发人员能够更灵活地处理ArkTS值和对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Node-API操作ArkTS对象时，需要了解一些基本概念。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ArkTS值到C/C++类型的转换："
          })
        }), " 在Node-API模块中，可以使用Node-API函数将ArkTS值转换为C/C++的数据类型，如将ArkTS数值转换为C/C++的整数、将ArkTS字符串转换为C/C++的字符数组等。同样，也可以将C/C++的数据类型转换为ArkTS值，以便将结果返回给ArkTS代码。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能介绍",
      children: "场景和功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下接口用于从C/C++代码中与ArkTS交互，传递数据并执行操作"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的ArkTS value强转为ArkTS boolean值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的ArkTS value强转成ArkTS number。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的ArkTS value强转成ArkTS Object。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_coerce_to_string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的ArkTS value强转成ArkTS string。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将给定的C boolean值，获取ArkTS boolean值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_bool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据给定的ArkTS boolean值，获取等价的C/C++布尔值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取全局ArkTS对象，以便在C/C++中访问和操纵全局对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS null。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取ArkTS undefined。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Node-API接口开发流程请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/use-napi-process",
        children: "使用Node-API实现跨语言交互开发流程"
      }), "，本文仅展示接口对应的C++及ArkTS相关代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_coerce_to_bool",
      children: "napi_coerce_to_bool"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于将给定的ArkTS value强转成ArkTS boolean值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_coerce_to_bool\nstatic napi_value CoerceToBool(napi_env env, napi_callback_info info)\n{\n    // 获取并解析传入的参数\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 将传入的值转换为布尔值\n    napi_value result = nullptr;\n    napi_coerce_to_bool(env, args[0], &result);\n    // 返回强转之后的ArkTS boolean值\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const coerceToBool: <T>(data: T) => boolean; // napi_coerce_to_bool\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_coerce_to_bool\nlet value = testNapi.coerceToBool<number>(0);\nlet str = testNapi.coerceToBool<string>('111111111');\nlet obj = new Object();\nlet res = testNapi.coerceToBool<Object>(obj);\nlet result = testNapi.coerceToBool<null>(null);\n// false\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_coerce_to_bool:%{public}s', value);\n// true\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_coerce_to_bool:%{public}s', str);\n// true\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_coerce_to_bool:%{public}s', res);\n// false\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_coerce_to_bool:%{public}s', result);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_coerce_to_number",
      children: "napi_coerce_to_number"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将给定的ArkTS value强转成ArkTS number。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_coerce_to_number\nstatic napi_value CoerceToNumber(napi_env env, napi_callback_info info)\n{\n    // 获取并解析传入的参数\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 将传入的值转换为number值\n    napi_value result = nullptr;\n    napi_coerce_to_number(env, args[0], &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const coerceToNumber: <T>(data: T) => number; // napi_coerce_to_number\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_coerce_to_number\nlet value = testNapi.coerceToNumber<string>('2556');\nlet str = testNapi.coerceToNumber<string>('sssss');\nlet bool = testNapi.coerceToNumber<boolean>(true);\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_coerce_to_number:%{public}d', value);\n// 返回的为NAN\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_coerce_to_number:%{public}d', str);\n// 返回的是1\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_coerce_to_number:%{public}d', bool);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_coerce_to_object",
      children: "napi_coerce_to_object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于将给定的ArkTS value强转成ArkTS Object。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_coerce_to_object\nstatic napi_value CoerceToObject(napi_env env, napi_callback_info info)\n{\n    // 获取并解析传入的参数\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_value obj = nullptr;\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 将传入的值转换为Object值\n    napi_coerce_to_object(env, args[0], &obj);\n    return obj;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const coerceToObject: <T>(data: T) => Object; // napi_coerce_to_object\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_coerce_to_object\nlet value = testNapi.coerceToObject<string>('222222');\nlet result = testNapi.coerceToObject<number>(111);\nhilog.info(0x0000, 'testTag', 'Node-API coerceToObject:%{public}s.', typeof result);\nif (typeof value === 'object') {\n  hilog.info(0x0000, 'testTag', 'Node-API The value is an object.');\n} else {\n  hilog.info(0x0000, 'testTag', 'Node-API The value is not an object.');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_coerce_to_string",
      children: "napi_coerce_to_string"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于将给定的ArkTS value强转成ArkTS string。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_coerce_to_string\nstatic napi_value CoerceToString(napi_env env, napi_callback_info info)\n{\n    // 获取并解析传入的参数\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 将传入的值转换为string\n    napi_value str = nullptr;\n    napi_coerce_to_string(env, args[0], &str);\n    return str;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const coerceToString: <T>(data: T) => string; // napi_coerce_to_string\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_coerce_to_string\nlet value = testNapi.coerceToString<number>(212);\nlet obj = new Object();\nlet res = testNapi.coerceToString<Object>(obj);\nlet bool = testNapi.coerceToString<boolean>(false);\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_coerce_to_string:%{public}s', value);\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_coerce_to_string:%{public}s', typeof res);\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_coerce_to_string:%{public}s', bool);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_boolean",
      children: "napi_get_boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据给定的C boolean值，获取等价的ArkTS boolean值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_boolean\nstatic napi_value GetBoolean(napi_env env, napi_callback_info info)\n{\n    // 传入两个参数并解析\n    size_t argc = 2;\n    napi_value argv[2];\n    napi_valuetype data = napi_undefined;\n    napi_valuetype value = napi_undefined;\n    napi_status status = napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    if (status != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"napi_get_cb_info failed\");\n        return nullptr;\n    }\n    // 判断两个参数类型值\n    napi_typeof(env, argv[0], &data);\n    napi_typeof(env, argv[1], &value);\n\n    napi_value returnValue = nullptr;\n    // 判断两个类型值是否相等,获取结果的布尔值\n    status = napi_get_boolean(env, data == value, &returnValue);\n    if (status != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"napi_get_boolean failed\");\n        return nullptr;\n    }\n    // 返回结果\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getBoolean: <T>(data: T, value: String) => boolean; // napi_get_boolean\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_boolean\nlet value = testNapi.getBoolean<number>(1, '1');\nlet data = testNapi.getBoolean<string>('sss', '1');\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_get_boolean:%{public}s', value);\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_get_boolean:%{public}s', data);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_value_bool",
      children: "napi_get_value_bool"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用此函数将ArkTS中的布尔值转换为等价的C布尔值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_value_bool\nstatic napi_value GetValueBool(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    bool boolC = false;\n    napi_status status = napi_get_value_bool(env, args[0], &boolC);\n    if (status == napi_boolean_expected) {\n        // 如果napi_get_value_bool成功会返回napi_ok，如果传入一个非布尔值则会返回napi_boolean_expected\n        return nullptr;\n    }\n    napi_value boolNapi = nullptr;\n    status = napi_get_boolean(env, boolC, &boolNapi);\n    if (status != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"napi_get_boolean failed\");\n        return nullptr;\n    }\n    return boolNapi;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getValueBool: (value: boolean | string) => boolean | undefined; // napi_get_value_bool\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_value_bool\n// 分别传入布尔值和非布尔值检测接口,传入布尔值将返回原布尔值,传入其他类型返回undefined\nhilog.info(0x0000, 'Node-API', 'get_value_bool_not_bool %{public}s',\n  testNapi.getValueBool('你好123'));\nhilog.info(0x0000, 'Node-API', 'get_value_bool_true %{public}s', testNapi.getValueBool(true));\nhilog.info(0x0000, 'Node-API', 'get_value_bool_false %{public}s', testNapi.getValueBool(false));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_global",
      children: "napi_get_global"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取全局ArkTS对象。此函数用于获取表示ArkTS全局对象的napi_value，使C/C++模块能与ArkTS运行时的全局对象交互。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_global\nstatic napi_value GetGlobal(napi_env env, napi_callback_info info)\n{\n    napi_value global = nullptr;\n    // 获取global对象\n    napi_get_global(env, &global);\n    return global;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getGlobal: () => Object; // napi_get_global\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_global\nlet globalObj = testNapi.getGlobal();\n// 判断获取的global是否具有global的自身属性\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_get_global:%{public}s',\n  globalObj.hasOwnProperty!(\"undefined\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_null",
      children: "napi_get_null"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkTS中的null值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_null\nstatic napi_value GetNull(napi_env env, napi_callback_info info)\n{\n    napi_value nullValue = nullptr;\n    napi_get_null(env, &nullValue);\n    return nullValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getNull: () => null; // napi_get_null\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_null\nlet value = testNapi.getNull();\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_get_null:%{public}s', value);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_undefined",
      children: "napi_get_undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取ArkTS中的undefined值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_undefined\nstatic napi_value GetUndefined(napi_env env, napi_callback_info info)\n{\n    // 获取并解析传入的参数\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    napi_value value = nullptr;\n    napi_get_undefined(env, &value);\n    // 判断传入参数的类型与undefined值的类型是否一致\n    bool isEqual = false;\n    napi_strict_equals(env, args[0], value, &isEqual);\n    // 参数与undefined值相等\n    napi_value result = nullptr;\n    // 返回判断类型之后的结果，相等返回为true，不等则为false\n    napi_get_boolean(env, isEqual, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getUndefined: (value: undefined) => boolean; // napi_get_undefined\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_undefined\nlet data: undefined = undefined;\nlet value = testNapi.getUndefined(data);\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_get_undefined:%{public}s', value);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上代码如果要在native cpp中打印日志，需在CMakeLists.txt文件中添加以下配置信息（并添加头文件：#include \"hilog/log.h\"）："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// CMakeLists.txt\nadd_definitions( \"-DLOG_DOMAIN=0xd0d0\" )\nadd_definitions( \"-DLOG_TAG=\\\"testTag\\\"\" )\ntarget_link_libraries(entry PUBLIC libace_napi.z.so libhilog_ndk.z.so)\n"
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