"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["867486"], {
629365(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_property_use_napi_about_property_md_be8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-about-property-use-napi-about-property-md-be8.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_property_use_napi_about_property_md_be8_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property/use-napi-about-property","title":"使用Node-API接口设置ArkTS对象的属性","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property/use-napi-about-property.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"title":"使用Node-API接口设置ArkTS对象的属性","sidebar_position":18,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-property","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口处理异步操作","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-promise/"},"next":{"title":"使用Node-API接口创建和获取string值","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-string/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-property/use-napi-about-property.md


const frontMatter = {
	title: '使用Node-API接口设置ArkTS对象的属性',
	sidebar_position: 18,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-property',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口设置ArkTS对象的属性';

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
  "value": "napi_get_property_names",
  "id": "napi_get_property_names",
  "level": 3
}, {
  "value": "napi_set_property",
  "id": "napi_set_property",
  "level": 3
}, {
  "value": "napi_get_property",
  "id": "napi_get_property",
  "level": 3
}, {
  "value": "napi_has_property",
  "id": "napi_has_property",
  "level": 3
}, {
  "value": "napi_delete_property",
  "id": "napi_delete_property",
  "level": 3
}, {
  "value": "napi_has_own_property",
  "id": "napi_has_own_property",
  "level": 3
}, {
  "value": "napi_set_named_property",
  "id": "napi_set_named_property",
  "level": 3
}, {
  "value": "napi_get_named_property",
  "id": "napi_get_named_property",
  "level": 3
}, {
  "value": "napi_has_named_property",
  "id": "napi_has_named_property",
  "level": 3
}, {
  "value": "napi_define_properties",
  "id": "napi_define_properties",
  "level": 3
}, {
  "value": "napi_get_all_property_names",
  "id": "napi_get_all_property_names",
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
        id: "使用node-api接口设置arkts对象的属性",
        children: "使用Node-API接口设置ArkTS对象的属性"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用Node-API接口获取和设置ArkTS对象的属性，实现更复杂的功能和逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "处理ArkTS对象属性，确保正确访问、设置、删除属性，并了解属性的继承关系和枚举特性。以下是一些关键概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "对象（Object）"
          })
        }), "：在ArkTS中，对象是一种复合数据类型，它允许存储多个不同类型的值作为一个单独的实体。对象是属性和方法的集合。属性是与对象相关联的值，而方法则是对象可以执行的操作。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "属性（Property）"
          })
        }), "：在ArkTS中，属性是对象特征的键值对。每个属性都有一个名字（也称为键或标识符）和一个值。属性的值可以是任意数据类型，包括基本类型、对象和函数。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "可枚举属性（EnumerableProperty）"
          })
        }), "：在ArkTS中，对象的属性分为可枚举和不可枚举，它们是由属性的enumerable值决定的，即内部 “可枚举” 标志设置为true或false。可枚举性决定了这个属性能否被 for...in 查找遍历到。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "自有属性（OwnProperty）"
          })
        }), "：自有属性是直接定义在对象上的属性，而不是从原型链上继承来的属性。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能介绍",
      children: "场景和功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下Node-API接口提供了对ArkTS对象属性的操作，包括设置、获取、删除和检查属性是否存在。使用场景如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_get_property_names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在进行对象操作或调试时，有时需要获取对象的属性和属性名。此接口可以提取对象的属性名，用于动态获取对象的属性信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此接口可以动态地向对象添加属性。也可修改对象的属性值，满足动态属性值变更的需求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在调用Node-API模块的函数或方法时，可能需要将ArkTS对象的属性值作为参数传递。此接口可以获取属性值，并将其传递给其他函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在进行属性访问之前，通常需要先检查对象中是否存在指定的属性。此接口可以检查对象中是否存在指定的属性，避免访问不存在属性导致的异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_delete_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此函数用于删除ArkTS对象上的属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_own_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此函数用于检查ArkTS对象是否直接拥有（而不是从其原型链上继承）某个属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_set_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此函数用于将值赋给ArkTS对象的命名属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此函数用于获取ArkTS对象的命名属性值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_has_named_property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此函数用于检查ArkTS对象是否包含某个命名属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_define_properties"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此函数可以在指定的Object中自定义属性，从ArkTS访问和操作这些属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_all_property_names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "此接口可以获取对象的所有属性名称，检查是否包含特定属性名。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Node-API接口开发流程可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/use-napi-process",
        children: "使用Node-API实现跨语言交互开发流程"
      }), "，本文展示接口对应C++及ArkTS代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_property_names",
      children: "napi_get_property_names"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以字符串数组的形式获取对象的可枚举属性的名称。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_property_names\nstatic napi_value GetPropertyNames(napi_env env, napi_callback_info info)\n{\n    // 解析ArkTS的传参\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 以字符串数组的形式获取对象的可枚举属性的名称，以result传出\n    napi_value result;\n    napi_status status = napi_get_property_names(env, args[0], &result);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_get_property_names fail\");\n        return nullptr;\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getPropertyNames: (obj: Object) => Array<string> | undefined; // napi_get_property_names\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_property_names\ntry {\n  class Obj {\n    public data: number = 0\n    public message: string = ''\n  }\n\n  let obj: Obj = { data: 0, message: 'hello world' };\n  let propertyNames = testNapi.getPropertyNames(obj);\n  if (Array.isArray(propertyNames) && propertyNames.length > 0) {\n    hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_property_names: %{public}s',\n      propertyNames[0]);\n    hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_property_names: %{public}s',\n      propertyNames[1]);\n    // ...\n  }\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_get_property_names error: %{public}s',\n    error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_set_property",
      children: "napi_set_property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将给定的属性与值设置入给定的Object。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_set_property\nstatic napi_value SetProperty(napi_env env, napi_callback_info info)\n{\n    // 接收ArkTS侧传入的三个参数：第一个参数为想要设置的object，第二个参数为属性，第三个参数为属性对应的值\n    size_t argc = 3;\n    napi_value args[3] = {nullptr};\n    napi_status status = napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_get_cb_info fail\");\n    }\n    // 通过调用napi_set_property接口将属性与值设置入object，如果失败，直接抛出错误\n    status = napi_set_property(env, args[0], args[1], args[INT_ARG_2]);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_set_property fail\");\n        return nullptr;\n    }\n    // 返回设置成功的object对象\n    return args[0];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const setProperty: (obj: Object, key: String, value: string) => Object | undefined; // napi_set_property\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_set_property\ntry {\n  class Obj {\n    public data: number = 0\n    public message: string = ''\n  }\n\n  let obj: Obj = { data: 0, message: 'hello world' };\n  let result = testNapi.setProperty(obj, 'code', 'hi');\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_set_property: %{public}s',\n    JSON.stringify(result));\n  // ...\n} catch (error) {\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_set_property error: %{public}s', error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_property",
      children: "napi_get_property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取object指定的属性的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_property\nstatic napi_value GetProperty(napi_env env, napi_callback_info info)\n{\n    // 接收两个ArkTS传来的参数\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 传入的第一个参数为要检测的object，第二个对象为要检测的属性，通过调用napi_get_property接口获取对应的值\n    napi_value result;\n    napi_status status = napi_get_property(env, args[0], args[1], &result);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_get_property fail\");\n        return nullptr;\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getProperty: (obj: Object, key: string) => string | undefined; // napi_get_property\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_property\ntry {\n  class Obj {\n    public data: number = 0\n    public message: string = ''\n  }\n\n  let obj: Obj = { data: 0, message: 'hello world' };\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_property: %{public}s',\n    testNapi.getProperty(obj, 'message'));\n  // ...\n} catch (error) {\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_property error: %{public}s', error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_has_property",
      children: "napi_has_property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查对象中是否存在指定的属性，避免访问不存在属性导致的异常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_has_property\nstatic napi_value HasProperty(napi_env env, napi_callback_info info)\n{\n    // 从ArkTS侧传入两个参数：第一个参数为要检验的对象，第二个参数为要检测是否存在对象的属性\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 将参数传入napi_has_property方法中，若接口调用成功则将结果转化为napi_value类型抛出，否则抛出错误\n    bool result;\n    napi_status status = napi_has_property(env, args[0], args[1], &result);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_has_property fail\");\n        return nullptr;\n    }\n\n    // 若传入属性存在传入对象中，则输出true将结果转化为napi_value类型抛出\n    napi_value returnResult;\n    napi_get_boolean(env, result, &returnResult);\n    return returnResult;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const hasProperty: (obj: Object, key: number | string) => boolean | undefined; // napi_has_property\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_has_property\ntry {\n  class Obj {\n    public data: number = 0\n    public message: string = ''\n  }\n\n  let obj: Obj = { data: 0, message: 'hello world' };\n  let resultFalse = testNapi.hasProperty(obj, 0);\n  let resultTrue = testNapi.hasProperty(obj, 'data');\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_has_property: %{public}s',\n    JSON.stringify(resultFalse));\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_has_property: %{public}s',\n    JSON.stringify(resultTrue));\n  // ...\n} catch (error) {\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_has_property error: %{public}s', error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_delete_property",
      children: "napi_delete_property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "尝试从给定的Object中删除由key指定的属性，并返回操作的结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果对象不可扩展或属性不可配置，则可能无法删除该属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_delete_property\n// 从传入的Object对象中删除指定属性，返回是否删除成功的bool结果值\nstatic napi_value DeleteProperty(napi_env env, napi_callback_info info)\n{\n    // 接收两个ArkTS传来的参数\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    napi_valuetype valueType;\n    napi_typeof(env, args[0], &valueType);\n    if (valueType != napi_object) {\n        napi_throw_error(env, nullptr, \"Expects an object as argument.\");\n        return nullptr;\n    }\n    // 删除指定属性，结果存储在result中\n    bool result = false;\n    napi_status status = napi_delete_property(env, args[0], args[1], &result);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_delete_property failed\");\n        return nullptr;\n    }\n    // 将bool结果转换为napi_value并返回\n    napi_value ret;\n    napi_get_boolean(env, result, &ret);\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const deleteProperty: (obj: Object, key: string) => boolean; // napi_delete_property\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import testNapi from 'libentry.so';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\nexport function napiDeleteProperty() {\n  class Obj {\n    first: number = 0;\n  }\n\n  let obj: Obj = { first: 1 };\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_delete_property first: %{public}s',\n    testNapi.deleteProperty(obj, 'first'));\n  // Set the new property as non-configurable\n  // The Object.defineProperty method is not supported in DevEco Studio 4.1.0.400 and above versions, and needs to be used in TS (TypeScript)\n  Object.defineProperty(obj, 'config', {\n    configurable: false,\n    value: 'value'\n  })\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_delete_property config: %{public}s',\n    testNapi.deleteProperty(obj, 'config'));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_has_own_property",
      children: "napi_has_own_property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于检查传入的Object是否包含自己的命名属性，不包括从原型链上继承的属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_has_own_property\nstatic napi_value NapiHasOwnProperty(napi_env env, napi_callback_info info)\n{\n    // 接收两个ArkTS传来的参数\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 检查第一个参数是否为对象\n    napi_valuetype valueTypeObj;\n    napi_typeof(env, args[0], &valueTypeObj);\n    if (valueTypeObj != napi_object) {\n        napi_throw_error(env, nullptr, \"First argument must be an object.\");\n        return nullptr;\n    }\n    // 检查第二个参数是否为string\n    napi_valuetype valuetypeStr;\n    napi_typeof(env, args[1], &valuetypeStr);\n    if (valuetypeStr != napi_string) {\n        napi_throw_error(env, nullptr, \"Second argument must be a string.\");\n        return nullptr;\n    }\n    // 检查对象是否具有指定属性，结果存储在hasProperty中\n    bool hasProperty;\n    napi_status status = napi_has_own_property(env, args[0], args[1], &hasProperty);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_has_own_property failed\");\n        return nullptr;\n    }\n    // 将bool结果转换为napi_value并返回\n    napi_value result;\n    napi_get_boolean(env, hasProperty, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const napiHasOwnProperty: (obj: Object, key: string) => boolean | undefined; // napi_has_own_property\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\nexport function napiHasOwnProperty() {\n  let myObj = { 'myProperty': 1 };\n  let inheritedObj = { 'inheritedProperty': 2 };\n  // The Object.setPrototypeOf method is not supported in DevEco Studio 4.1.0.400 and later versions, and must be used in TypeScript (TS).\n  Object.setPrototypeOf(myObj, inheritedObj);\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_has_own_property my: %{public}s',\n    testNapi.napiHasOwnProperty(myObj, 'myProperty'));\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_has_own_property inherited: %{public}s',\n    testNapi.napiHasOwnProperty(myObj, 'inheritedProperty'));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_set_named_property",
      children: "napi_set_named_property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在传入的ArkTS对象上添加一个命名属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_set_named_property\nstatic napi_value NapiSetNamedProperty(napi_env env, napi_callback_info info)\n{\n    // 接收一个ArkTS传来的参数\n    size_t argc = 1;\n    napi_value str;\n    const int32_t strLength = 32;\n    char strKey[strLength] = \"\";\n    napi_get_cb_info(env, info, &argc, &str, nullptr, nullptr);\n    // 获取传入参数字符串并存储在strKey中\n    size_t keyLength;\n    napi_status status = napi_get_value_string_utf8(env, str, strKey, strLength, &keyLength);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_get_value_string_utf8 failed\");\n        return nullptr;\n    }\n    // 创建一个新对象\n    napi_value newObj;\n    napi_create_object(env, &newObj);\n    // 设置整数值1234为属性值\n    int32_t value = 1234;\n    napi_value numValue;\n    napi_create_int32(env, value, &numValue);\n    // 将整数值与指定属性名关联\n    status = napi_set_named_property(env, newObj, strKey, numValue);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_set_named_property failed\");\n        return nullptr;\n    }\n    // 返回设置了命名属性的对象newObj\n    return newObj;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const napiSetNamedProperty: (key: string) => Object | undefined; // napi_set_named_property\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_set_named_property\nlet obj = testNapi.napiSetNamedProperty('myProperty');\nlet objAsString = JSON.stringify(obj);\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_set_named_property: %{public}s', objAsString);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_named_property",
      children: "napi_get_named_property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从ArkTS对象中获取命名属性的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_named_property\nstatic napi_value NapiGetNamedProperty(napi_env env, napi_callback_info info)\n{\n    // 接收两个ArkTS传来的参数\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    const int32_t strLength = 32;\n    char strKey[strLength] = \"\";\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 获取要获取的属性名\n    size_t keyLength;\n    napi_get_value_string_utf8(env, args[1], strKey, strLength, &keyLength);\n    // 获取指定属性的值并存储在result中\n    napi_value result;\n    napi_status status = napi_get_named_property(env, args[0], strKey, &result);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_get_named_property failed\");\n        return nullptr;\n    }\n    // 返回result\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const napiGetNamedProperty: (obj: Object,\n  key: string) => boolean | number | string | Object | undefined; // napi_get_named_property\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_named_property\ninterface NestedObj {\n  nestedStr: string;\n  nestedNum: number;\n}\n\nclass Obj {\n  public str: string = '';\n  public num: number = 0;\n  public bol: boolean = false;\n  public nestedObj: NestedObj = { nestedStr: '', nestedNum: 0 };\n}\n\nlet obj: Obj = {\n  str: 'bar',\n  num: 42,\n  bol: true,\n  nestedObj: { nestedStr: 'nestedValue', nestedNum: 123 }\n};\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_get_named_property : %{public}s',\n  testNapi.napiGetNamedProperty(obj, 'str'));\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_get_named_property : %{public}d',\n  testNapi.napiGetNamedProperty(obj, 'num'));\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_get_named_property : %{public}s',\n  testNapi.napiGetNamedProperty(obj, 'bol'));\nlet nestedObj = testNapi.napiGetNamedProperty(obj, 'nestedObj');\nlet objAsString = JSON.stringify(nestedObj);\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_get_named_property : %{public}s', objAsString);\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_get_named_property : %{public}s',\n  testNapi.napiGetNamedProperty(obj, 'null'));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_has_named_property",
      children: "napi_has_named_property"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查ArkTS对象中是否具有指定的命名属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_has_named_property\nstatic napi_value NapiHasNamedProperty(napi_env env, napi_callback_info info)\n{\n    // 接收两个ArkTS传来的参数\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    const int32_t strLength = 32;\n    char strKey[strLength] = \"\";\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 获取要检查的属性名\n    size_t keyLength;\n    napi_get_value_string_utf8(env, args[1], strKey, strLength, &keyLength);\n    // 检查对象是否具有指定命名的属性，并将结果存储在hasProperty中\n    bool hasProperty = false;\n    napi_status status = napi_has_named_property(env, args[0], strKey, &hasProperty);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_has_named_property failed\");\n        return nullptr;\n    }\n    // 将bool结果转换为napi_value并返回\n    napi_value result;\n    napi_get_boolean(env, hasProperty, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const napiHasNamedProperty: (obj: Object, key: string) => boolean | undefined; // napi_has_named_property\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_has_named_property\ninterface NestedObj {\n  nestedStr: string;\n  nestedNum: number;\n}\n\nclass Obj {\n  public str: string = '';\n  public num: number = 0;\n  public bol: boolean = false;\n  public nestedObj: NestedObj = { nestedStr: '', nestedNum: 0 };\n}\n\nlet obj: Obj = {\n  str: 'bar',\n  num: 42,\n  bol: true,\n  nestedObj: { nestedStr: 'nestedValue', nestedNum: 123 }\n};\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_has_named_property : %{public}s',\n  testNapi.napiHasNamedProperty(obj, 'str'));\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_has_named_property : %{public}s',\n  testNapi.napiHasNamedProperty(obj, 'nestedStr'));\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_has_named_property : %{public}s',\n  testNapi.napiHasNamedProperty(obj, 'bol'));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_define_properties",
      children: "napi_define_properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置对象的属性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_define_properties\nstatic napi_value DefineMethodPropertiesExample(napi_env env, napi_callback_info info)\n{\n    // 创建一个int32类型的属性值\n    int32_t propValue = 26;\n    napi_value returnValue = nullptr;\n    napi_create_int32(env, propValue, &returnValue);\n    return returnValue;\n}\n\n// Getter回调函数\nstatic napi_value GetterCallback(napi_env env, napi_callback_info info)\n{\n    napi_value result;\n    const char *str = u8\"World!\";\n    size_t length = strlen(str);\n    // 创建属性的值\n    napi_create_string_utf8(env, str, length, &result);\n    return result;\n}\n\n// Setter回调函数\nstatic napi_value SetterCallback(napi_env env, napi_callback_info info)\n{\n    // 获取传递给setter的参数\n    size_t argc = 1;\n    napi_value argv[1] = {nullptr};\n    napi_value result;\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    size_t length = 0;\n    napi_get_value_string_utf8(env, argv[0], nullptr, 0, &length);\n    char* buf = new char[length + 1];\n    std::memset(buf, 0, length + 1);\n    napi_get_value_string_utf8(env, argv[0], buf, length + 1, &length);\n    napi_create_string_utf8(env, buf, length, &result);\n    delete[] buf;\n    return result;\n}\n\nstatic napi_value DefineMethodProperties(napi_env env, napi_callback_info info)\n{\n    napi_value obj;\n    napi_create_object(env, &obj);\n    // 在obj对象上定义了一个函数defineMethodPropertiesExample，在函数defineMethodPropertiesExample中定义了一个变量并返回，在调用obj的这个对象时可以调用这个函数\n    napi_property_descriptor descriptor[] = {{\"defineMethodPropertiesExample\", nullptr, DefineMethodPropertiesExample,\n                                              nullptr, nullptr, nullptr, napi_default, nullptr}};\n    napi_define_properties(env, obj, sizeof(descriptor) / sizeof(descriptor[0]), descriptor);\n    return obj;\n}\n\nstatic napi_value DefineStringProperties(napi_env env, napi_callback_info info)\n{\n    napi_value obj;\n    napi_create_object(env, &obj);\n    // 创建一个string类型的属性值\n    napi_value string_value;\n    napi_create_string_utf8(env, \"Hello!\", NAPI_AUTO_LENGTH, &string_value);\n    napi_property_descriptor descriptor[] = {\n        {\"defineStringPropertiesExample\", nullptr, nullptr, nullptr, nullptr, string_value, napi_default, nullptr}};\n    napi_define_properties(env, obj, sizeof(descriptor) / sizeof(descriptor[0]), descriptor);\n    return obj;\n}\n\nstatic napi_value CreateStringWithGetterSetter(napi_env env, napi_callback_info info)\n{\n    napi_value obj;\n    napi_create_object(env, &obj);\n    // 定义getter函数\n    napi_value getterFn;\n    napi_create_function(env, nullptr, 0, GetterCallback, nullptr, &getterFn);\n    napi_set_named_property(env, obj, \"getterCallback\", getterFn);\n    // 定义setter函数\n    napi_value setterFn;\n    napi_create_function(env, nullptr, 0, SetterCallback, nullptr, &setterFn);\n    napi_set_named_property(env, obj, \"setterCallback\", setterFn);\n    // 定义带有getter和setter的属性\n    napi_property_descriptor desc = {\"defineGetterSetter\", nullptr, nullptr, GetterCallback, SetterCallback, nullptr,\n                                     napi_enumerable, nullptr};\n    napi_define_properties(env, obj, 1, &desc);\n    return obj;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export class DefineMethodObj {\n  defineMethodPropertiesExample: Function;\n}\n\nexport class DefineStringObj {\n  defineStringPropertiesExample: string;\n}\n\nexport class DefineGetterSetterObj {\n  getterCallback: Function;\n  setterCallback: Function;\n}\n\nexport const defineMethodProperties: () => DefineMethodObj; // napi_define_properties\n\nexport const defineStringProperties: () => DefineStringObj;\n\nexport const createStringWithGetterSetter: () => DefineGetterSetterObj;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_define_properties\n// 定义method类型的属性\nhilog.info(0x0000, 'testTag', 'Test Node-API define_method_properties:%{public}d',\n  testNapi.defineMethodProperties()\n    .defineMethodPropertiesExample());\n// 定义string类型的属性\nhilog.info(0x0000, 'testTag', 'Test Node-API define_string_properties::%{public}s ',\n  testNapi.defineStringProperties()\n    .defineStringPropertiesExample);\n// getter和setter\nhilog.info(0x0000, 'testTag', 'Test Node-API get::%{public}s ',\n  testNapi.createStringWithGetterSetter()\n    .getterCallback());\nhilog.info(0x0000, 'testTag', 'Test Node-API setter::%{public}s ',\n  testNapi.createStringWithGetterSetter()\n    .setterCallback('set data'));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_all_property_names",
      children: "napi_get_all_property_names"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取传入的ArkTS对象的所有属性名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_all_property_names\nstatic napi_value GetAllPropertyNames(napi_env env, napi_callback_info info)\n{\n    // 传入一个参数\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取给定对象的所有属性名称\n    napi_value result;\n    napi_status status = napi_get_all_property_names(env, args[0], napi_key_own_only, napi_key_writable,\n                                                     napi_key_numbers_to_strings, &result);\n    // 如果获取属性名失败，抛出一个错误\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_get_all_property_names fail\");\n        return nullptr;\n    }\n\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getAllPropertyNames: (obj: Object) => Array<string> | undefined; // napi_get_all_property_names\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_all_property_names\ntry {\n  class Obj {\n    public data: number = 0\n    public message: string = ''\n  }\n\n  let obj: Obj = { data: 0, message: 'hello world' };\n  let propertyNames = testNapi.getAllPropertyNames(obj);\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_all_property_names: %{public}s',\n    JSON.stringify(propertyNames));\n  // ...\n} catch (error) {\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_all_property_names error: %{public}s',\n    error.message);\n  // ...\n}\n"
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