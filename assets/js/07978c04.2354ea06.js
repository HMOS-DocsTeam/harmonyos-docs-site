"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["667192"], {
306697(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_object_use_napi_about_object_md_079_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-about-object-use-napi-about-object-md-079.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_object_use_napi_about_object_md_079_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-object/use-napi-about-object","title":"使用Node-API接口进行object相关开发","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-object/use-napi-about-object.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-object","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-object/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"使用Node-API接口进行object相关开发","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-object","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口进行生命周期相关开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-life-cycle/"},"next":{"title":"使用Node-API其他实用接口","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-other-practical-tools/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-object/use-napi-about-object.md


const frontMatter = {
	title: '使用Node-API接口进行object相关开发',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-object',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口进行object相关开发';

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
  "value": "napi_get_prototype",
  "id": "napi_get_prototype",
  "level": 3
}, {
  "value": "napi_create_object",
  "id": "napi_create_object",
  "level": 3
}, {
  "value": "napi_object_freeze",
  "id": "napi_object_freeze",
  "level": 3
}, {
  "value": "napi_object_seal",
  "id": "napi_object_seal",
  "level": 3
}, {
  "value": "napi_typeof",
  "id": "napi_typeof",
  "level": 3
}, {
  "value": "napi_instanceof",
  "id": "napi_instanceof",
  "level": 3
}, {
  "value": "napi_type_tag_object",
  "id": "napi_type_tag_object",
  "level": 3
}, {
  "value": "napi_check_object_type_tag",
  "id": "napi_check_object_type_tag",
  "level": 3
}, {
  "value": "napi_create_external",
  "id": "napi_create_external",
  "level": 3
}, {
  "value": "napi_get_value_external",
  "id": "napi_get_value_external",
  "level": 3
}, {
  "value": "napi_create_symbol",
  "id": "napi_create_symbol",
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
        id: "使用node-api接口进行object相关开发",
        children: "使用Node-API接口进行object相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node-API提供了相关接口对object进行基本操作，例如创建对象、获取原型、冻结和密封对象，检查对象的类型等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Node-API接口开发中，经常需要定义和操作对象。例如，创建一个API接口，该接口接受一个对象作为输入参数，对该对象执行某些操作，并返回一个结果对象。在这个过程中，需要确保接口的定义清晰、规范，并且与对象的属性和方法相兼容。"
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
        }), "：在ArkTS中，对象是一种复合数据类型，允许存储多个不同类型的值作为一个单独的实体。对象是属性和方法的集合。属性是与对象相关联的值，而方法则是对象可以执行的操作。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能介绍",
      children: "场景和功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下Node-API接口主要用于操作和管理ArkTS对象，使用场景介绍："
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
            children: "napi_get_prototype"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当需要获取一个ArkTS对象的原型时，可以使用这个接口。通过这个接口可以在C/C++中获取到这个原型对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Node-API模块中创建一个默认的ArkTS对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_freeze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当需要确保一个对象不会被修改时（immutable），可以使用这个接口来冻结该对象，使其属性不可更改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_object_seal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "类似于napi_object_freeze，napi_object_seal用于密封给定的对象，使其属性不可添加或删除，但可以修改属性的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_typeof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在处理传入的ArkTS值时，可以使用这个接口来获取其类型，以便进行相应的处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_instanceof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当需要在Node-API模块中确定一个对象是否为特定构造函数的实例时，可以使用这个接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_type_tag_object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以将指针的特定值与ArkTS对象关联起来，这对于一些自定义的内部对象标记非常有用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_check_object_type_tag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用此接口可以检查给定的对象上是否关联了特定类型的标记。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_symbol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个ArkTS Symbol对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_external"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于创建一个ArkTS外部对象，该对象可以用于将C/C++中的自定义数据结构或对象传递到ArkTS中，并且可以在ArkTS中访问其属性和方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_value_external"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于获得napi_create_external创建的绑定了外部数据的ArkTS值，此函数可以在ArkTS和C/C++之间传递数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这些接口为开发人员提供了在Node-API模块中处理ArkTS对象的灵活性和功能性，可以实现从创建对象、管理对象属性和类型检查等多种操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Node-API接口开发流程参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/use-napi-process",
        children: "使用Node-API实现跨语言交互开发流程"
      }), "，本文仅对接口对应C++及ArkTS相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_prototype",
      children: "napi_get_prototype"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以获得给定ArkTS对象的prototype。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\nstatic napi_value GetPrototype(napi_env env, napi_callback_info info)\n{\n    // 获取并解析传参\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args , nullptr, nullptr);\n    napi_value result = nullptr;\n    // 获取此对象的原型对象，将结果返回到napi_value类型的变量result中\n    napi_get_prototype(env, args[0], &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const getPrototype: (object: Object) => Object;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\n// 定义一个类\nclass Person {\n  // 属性\n  name: string;\n  age: number;\n  // 构造函数\n  constructor(name: string, age: number) {\n    this.name = name;\n    this.age = age;\n  }\n}\n// 创建类的实例\nconst person = new Person('Alice', 30);\n// 传入实例对象，获取该对象的原型\nlet applePrototype = testNapi.getPrototype(person);\n// 判断通过testNapi.getPrototype()函数获取到的原型是不是apple的原型\n// 在DevEco Studio 4.1及以后的版本中，由于ArkTS没有原型的概念，\n// 因此尝试进行原型赋值或相关操作时，\n// 将会触发错误提示'Prototype assignment is not supported (arkts-no-prototype-assignment)'，\n// 以下代码需在ts文件中执行\nif (applePrototype === Person.prototype) {\n  hilog.info(0x0000, 'Node-API', 'get_prototype_success');\n} else {\n  hilog.error(0x0000, 'Node-API', 'get_prototype_fail');\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_object",
      children: "napi_create_object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于在Node-API模块中创建一个空的ArkTS对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\nnapi_value NewObject(napi_env env, napi_callback_info info)\n{\n    napi_value object = nullptr;\n    // 创建一个空对象\n    napi_create_object(env, &object);\n    // 设置对象的属性\n    napi_value name = nullptr;\n    // 设置属性名为\"name\"\n    napi_create_string_utf8(env, \"name\", NAPI_AUTO_LENGTH, &name);\n    napi_value value = nullptr;\n    // 设置属性值为\"Hello from Node-API!\"\n    napi_create_string_utf8(env, \"Hello from Node-API!\", NAPI_AUTO_LENGTH, &value);\n    // 将属性设置到对象上\n    napi_set_property(env, object, name, value);\n    return object;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const createObject: () => { name: string };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\ntry {\n  const myObject = testNapi.createObject();\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_create_object: %{public}s', myObject.name);\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_create_object errorCode: %{public}s, errorMessage: %{public}s', error.code, error.message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_object_freeze",
      children: "napi_object_freeze"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于冻结给定的ArkTS对象。冻结对象后，无法再向对象添加新的属性或方法，也无法修改已有属性或方法的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"hilog/log.h\"\n#include \"napi/native_api.h\"\n\nstatic napi_value ObjectFreeze(napi_env env, napi_callback_info info)\n{\n    // 接受一个ArkTS侧传入的object\n    size_t argc = 1;\n    napi_value argv[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n\n    // 调用接口napi_object_freeze将传入的object冻结\n    napi_value objFreeze = argv[0];\n    napi_status status = napi_object_freeze(env, objFreeze);\n    if (status == napi_ok) {\n        OH_LOG_INFO(LOG_APP, \"Node-API napi_object_freeze success\");\n    }\n    // 将冻结后的object传回ArkTS侧\n    return objFreeze;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport interface Obj {\n  data: number\n  message: string\n}\nexport const objectFreeze: (objFreeze: Object) => Obj;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\ntry {\n  class Obj {\n    data: number = 0\n    message: string = \"\"\n  }\n  let obj: Obj = {data: 0, message: \"hello world\"};\n  let objFreeze = testNapi.objectFreeze(obj);\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_object_freeze: %{public}s', (objFreeze.data = 1));\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_object_freeze error: %{public}s', error.message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_object_seal",
      children: "napi_object_seal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "封闭一个对象后，无法向其添加新的属性，也无法删除或修改现有属性的可配置性。但是，可以继续修改已有属性的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"hilog/log.h\"\n#include \"napi/native_api.h\"\n\nstatic napi_value ObjectSeal(napi_env env, napi_callback_info info)\n{\n    // 接受一个ArkTS侧传入的object\n    size_t argc = 1;\n    napi_value argv[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    // 调用接口napi_object_seal将传入的object封闭，使其无法添加新的属性\n    napi_value objSeal = argv[0];\n    napi_status status = napi_object_seal(env, objSeal);\n    if (status == napi_ok) {\n        OH_LOG_INFO(LOG_APP, \"Node-API napi_object_seal success\");\n    } else {\n        napi_throw_error(env, nullptr, \"Node-API napi_object_seal failed\");\n        return nullptr;\n    }\n    // 将封闭后的object传回ArkTS侧\n    return objSeal;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport interface Obj {\n  data: number\n  message: string\n  id: number\n}\nexport const objectSeal : (objSeal: Object) => Obj;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\ntry {\n  class Obj {\n    data: number = 0\n    message: string = \"\"\n    // 可选属性\n    address?: number\n  }\n  let obj: Obj = { data: 0, message: \"hello world\"};\n  let objSeal = testNapi.objectSeal(obj);\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_object_seal: %{public}s', objSeal.message);\n  objSeal.data = 1;\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_object_seal: %{public}d', objSeal.data);\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_object_seal: %{public}d', (objSeal.id = 1));\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_object_seal error: %{public}s', error.message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_typeof",
      children: "napi_typeof"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个接口用于获取给定ArkTS value的ArkTS Type。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "**注：**napi_typeof可以判断的类型包含："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "object"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "function"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "bigint"
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\nstatic napi_value NapiTypeOf(napi_env env, napi_callback_info info)\n{\n    // 接受一个入参\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 调用napi_typeof判断传入ArkTS参数类型\n    napi_valuetype valueType;\n    napi_status status = napi_typeof(env, args[0], &valueType);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_typeof fail\");\n        return nullptr;\n    }\n    // 将结果转成napi_value类型返回。\n    napi_value returnValue = nullptr;\n    switch(valueType) {\n    case napi_undefined:\n        napi_create_string_utf8(env, \"Input type is napi_undefined\", NAPI_AUTO_LENGTH, &returnValue);\n        break;\n    case napi_null:\n        napi_create_string_utf8(env, \"Input type is napi_null\", NAPI_AUTO_LENGTH, &returnValue);\n        break;\n    case napi_boolean:\n        napi_create_string_utf8(env, \"Input type is napi_boolean\", NAPI_AUTO_LENGTH, &returnValue);\n        break;\n    case napi_number:\n        napi_create_string_utf8(env, \"Input type is napi_number\", NAPI_AUTO_LENGTH, &returnValue);\n        break;\n    case napi_string:\n        napi_create_string_utf8(env, \"Input type is napi_string\", NAPI_AUTO_LENGTH, &returnValue);\n        break;\n    case napi_object:\n        napi_create_string_utf8(env, \"Input type is napi_object\", NAPI_AUTO_LENGTH, &returnValue);\n        break;\n    case napi_function:\n        napi_create_string_utf8(env, \"Input type is napi_function\", NAPI_AUTO_LENGTH, &returnValue);\n        break;\n    case napi_bigint:\n        napi_create_string_utf8(env, \"Input type is napi_bigint\", NAPI_AUTO_LENGTH, &returnValue);\n        break;\n    default:\n        napi_create_string_utf8(env, \"unknown\", NAPI_AUTO_LENGTH, &returnValue);\n    }\n\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const napiTypeOf : <T>(value: T) => string | undefined;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\ntry {\n  let varUndefined: undefined;\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_typeof: %{public}s', testNapi.napiTypeOf(varUndefined));\n  let varNull: null = null;\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_typeof: %{public}s', testNapi.napiTypeOf(varNull));\n  let varTrue= true;\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_typeof: %{public}s', testNapi.napiTypeOf(varTrue));\n  let varNum = 1;\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_typeof: %{public}s', testNapi.napiTypeOf(varNum));\n  let varString = \"str\";\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_typeof: %{public}s', testNapi.napiTypeOf(varString));\n  class Obj {\n    id: number = 0\n    name: string = \"\"\n  }\n  let varObject: Obj = {id: 1, name: \"LiLei\"};\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_typeof: %{public}s', testNapi.napiTypeOf(varObject));\n  const mulNum = (a: number, b: number): number => a * b;\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_typeof: %{public}s', testNapi.napiTypeOf(mulNum));\n  let varBigint = BigInt(\"1234567890123456789012345678901234567890\");\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_typeof: %{public}s', testNapi.napiTypeOf(varBigint));\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_typeof error: %{public}s', error.message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_instanceof",
      children: "napi_instanceof"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于检查一个对象是否是指定构造函数的实例。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\nstatic napi_value NapiInstanceOf(napi_env env, napi_callback_info info)\n{\n    // 接受两个入参\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 调用napi_instanceof接口判断给定object是否为给定constructor的实例\n    bool result = true;\n    napi_status status = napi_instanceof(env, args[0], args[1], &result);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_instanceof fail\");\n        return nullptr;\n    }\n    // 将结果转成napi_value类型返回\n    napi_value returnValue = nullptr;\n    napi_get_boolean(env, result, &returnValue);\n\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const napiInstanceOf: (date: Object, construct: Object) => boolean | undefined;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\ntry {\n  class Person {\n    name: string;\n    age: number;\n\n    constructor(name: string, age: number) {\n      this.name = name;\n      this.age = age;\n    }\n  }\n  const person = new Person(\"Alice\", 30);\n  class Obj {\n    data: number = 0\n    message: string = \"\"\n  }\n  let obj: Obj = { data: 0, message: \"hello world\"};\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_instanceof: %{public}s', testNapi.napiInstanceOf(person, Person));\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_instanceof: %{public}s', testNapi.napiInstanceOf(obj, Person));\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_instanceof error: %{public}s', error.message);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_type_tag_object",
      children: "napi_type_tag_object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用类型标签type_tag来标记ArkTS对象，后续可以更精确地识别ArkTS对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS版本中，napi_type_tag_object接口没有使用private symbol，导致type_tag有被改写的风险，开发者应避免在关键安全场景中使用该接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_check_object_type_tag",
      children: "napi_check_object_type_tag"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "验证一个ArkTS对象是否带有特定类型标签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "类型标签提供了一种在Node-API模块和ArkTS对象之间建立强类型关联的机制，使得原生代码能够更准确地识别和处理特定的ArkTS对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\n#define NUMBERINT_FOUR 4\n// 定义一个静态常量napi_type_tag数组存储类型标签\nstatic const napi_type_tag TagsData[NUMBERINT_FOUR] = {\n    {0x9e4b2449547061b3, 0x33999f8a6516c499},\n    {0x1d55a794c53a726d, 0x43633f509f9c944e},\n    // 用于表示无标签或默认标签\n    {0, 0},\n    {0x6a971439f5b2e5d7, 0x531dc28a7e5317c0},\n};\n\nstatic napi_value SetTypeTagToObject(napi_env env, napi_callback_info info)\n{\n    // 获取函数调用信息和参数\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 获取索引数字转换为napi_value\n    int32_t index = 0;\n    napi_get_value_int32(env, args[1], &index);\n    // 给参数（对象）设置类型标签\n    napi_status status = napi_type_tag_object(env, args[0], &TagsData[index]);\n    if (status != napi_ok) {\n        napi_throw_error(env, \"Reconnect error\", \"napi_type_tag_object failed\");\n        return nullptr;\n    }\n    // 将bool结果转换为napi_value并返回\n    napi_value result = nullptr;\n    napi_get_boolean(env, true, &result);\n    return result;\n}\n\nstatic napi_value CheckObjectTypeTag(napi_env env, napi_callback_info info)\n{\n    // 获取函数调用信息和参数\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 获取索引数字转换为napi_value\n    int32_t index = 0;\n    napi_get_value_int32(env, args[1], &index);\n    // 检查对象的类型标签\n    bool checkResult = true;\n    napi_check_object_type_tag(env, args[0], &TagsData[index], &checkResult);\n    // 将bool结果转换为napi_value并返回\n    napi_value checked = nullptr;\n    napi_get_boolean(env, checkResult, &checked);\n\n    return checked;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const setTypeTagToObject: (obj: Object, index: number) => boolean | undefined;\nexport const checkObjectTypeTag: (obj: Object, index: number) => boolean;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\nclass Obj {\n  data: number = 0\n  message: string = \"\"\n}\nlet objA: Obj = { data: 0, message: \"hello world\"};\nlet objB: Obj = { data: 10, message: \"typeTag\"};\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_type_tag_object objA -> 0: %{public}s', testNapi.setTypeTagToObject(objA, 0));\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_type_tag_object objB -> 0: %{public}s', testNapi.setTypeTagToObject(objB, 0));\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_check_object_type_tag objA -> 0: %{public}s', testNapi.checkObjectTypeTag(objA, 0));\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_check_object_type_tag objB -> 1: %{public}s', testNapi.checkObjectTypeTag(objB, 1));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_external",
      children: "napi_create_external"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建自定义的C/C++对象并将其公开给ArkTS代码。这种情况下，我们可以使用napi_create_external来创建一个包含指向自定义对象的指针的Node-API值，以便让ArkTS代码能够访问和操作该对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <cstdlib>\n#include <string>\n#include \"hilog/log.h\"\n#include \"napi/native_api.h\"\n\n// 用于释放外部数据的回调函数\nvoid finalizeCallback(napi_env env, void *data, void *hint) {\n    // 释放外部数据\n    free(data);\n}\n\nstatic napi_value GetExternalType(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    // 获取参数的数据类型\n    napi_valuetype valueType;\n    napi_typeof(env, args[0], &valueType);\n    napi_value returnValue = nullptr;\n    if (valueType == napi_external) {\n        // 如果数据类型是napi_external,则返回true\n        napi_get_boolean(env, true, &returnValue);\n    } else {\n        napi_get_boolean(env, false, &returnValue);\n    }\n    return returnValue;\n}\n\nstatic napi_value CreateExternal(napi_env env, napi_callback_info info)\n{\n    // 设置外部数据大小为10\n    const size_t dataSize = 10;\n    // 分配外部数据\n    void *data = malloc(dataSize);\n    if (data == nullptr) {\n        OH_LOG_ERROR(LOG_APP, \"malloc failed\");\n        return nullptr;\n    }\n    // 初始化外部数据\n    memset(data, 0, dataSize);\n    napi_value result = nullptr;\n    // 返回带有外部数据的对象\n    napi_status status = napi_create_external(env, data, finalizeCallback, nullptr, &result);\n    if (status != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \" Node-API Failed to create external data\");\n        return nullptr;\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const createExternal: () => Object;\nexport const getExternalType: (externalData: Object) => boolean;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\nconst externalData = testNapi.createExternal();\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_create_external:%{public}s', testNapi.getExternalType(externalData));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_value_external",
      children: "napi_get_value_external"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "napi_create_external可以创建包装自定义的C/C++对象并将其公开给ArkTS代码，而napi_get_value_external就是用来获得napi_create_external所创建的外部对象的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\nstatic int external = 5;\nstatic napi_value GetValueExternal(napi_env env, napi_callback_info info)\n{\n    // 创建外部数据\n    int* data = &external;\n    napi_value setExternal = nullptr;\n    napi_create_external(env, data, nullptr, nullptr, &setExternal);\n    // 获得外部数据的值\n    void *getExternal;\n    napi_get_value_external(env, setExternal, &getExternal);\n    // 返回获得到的外部数据\n    napi_value result = nullptr;\n    napi_create_int32(env, *(int *)getExternal, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const getValueExternal: () => number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\nhilog.info(0x0000, 'Node-API', 'get_value_external:%{public}d', testNapi.getValueExternal());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_symbol",
      children: "napi_create_symbol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于创建一个新的Symbol。Symbol是一种特殊的数据类型，用于表示唯一的标识符。与字符串或数字不同，符号的值是唯一的，即使两个符号具有相同的描述，它们也是不相等的。符号通常用作对象属性的键，以确保属性的唯一性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n#include \"hilog/log.h\"\n\nstatic napi_value CreateSymbol(napi_env env, napi_callback_info info)\n{\n    napi_value result = nullptr;\n    const char *des = \"only\";\n    // 使用napi_create_string_utf8创建描述字符串\n    napi_status status = napi_create_string_utf8(env, des, NAPI_AUTO_LENGTH, &result);\n    if (status != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"Node-API napi_create_string_utf8 failed\");\n        return nullptr;\n    }\n    napi_value returnSymbol = nullptr;\n    // 创建一个symbol类型，并返回\n    status = napi_create_symbol(env, result, &returnSymbol);\n    if (status != napi_ok) {\n        OH_LOG_ERROR(LOG_APP, \"Node-API napi_create_symbol failed\");\n        return nullptr;\n    }\n    return returnSymbol;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.d.ts\nexport const createSymbol : () => symbol;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\nlet varSymbol = testNapi.createSymbol();\nhilog.info(0x0000, 'Node-API', 'createSymbol:%{public}s', typeof varSymbol);\n"
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