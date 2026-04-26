"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["666436"], {
580071(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_function_use_napi_about_function_md_2e8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-about-function-use-napi-about-function-md-2e8.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_function_use_napi_about_function_md_2e8_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-function/use-napi-about-function","title":"使用Node-API接口进行函数创建和调用","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-function/use-napi-about-function.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-function","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-function/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-function/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"使用Node-API接口进行函数创建和调用","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-function","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口关联数据，使其生命周期与当前环境的生命周期相关联","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-environmental-life-cycle/"},"next":{"title":"使用Node-API接口进行生命周期相关开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-life-cycle/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-function/use-napi-about-function.md


const frontMatter = {
	title: '使用Node-API接口进行函数创建和调用',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-function',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口进行函数创建和调用';

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
  "value": "napi_get_cb_info",
  "id": "napi_get_cb_info",
  "level": 2
}, {
  "value": "napi_call_function",
  "id": "napi_call_function",
  "level": 2
}, {
  "value": "napi_create_function",
  "id": "napi_create_function",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用node-api接口进行函数创建和调用",
        children: "使用Node-API接口进行函数创建和调用"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数调用允许开发者从Node-API模块中调用ArkTS函数并传递参数，或在Node-API模块中创建ArkTS函数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数是一种非常重要的编程概念，可以执行特定的任务或操作、提高代码的可读性、把复杂任务简化、提高代码复用性以及支持代码的组织与管理。每个函数可以负责不同的功能，提供一种将代码模块化和组织结构化的方式，使其更易于理解、维护和重用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能介绍",
      children: "场景和功能介绍"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "napi_get_cb_info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当需要从给定的callback info中获取有关调用的参数信息和this指针时，可使用此接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_call_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当需要在Node-API模块中对ArkTS侧函数进行调用时，可使用此接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_create_function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当需要将C/C++函数创建为ArkTS函数时，可以使用此接口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用示例",
      children: "使用示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Node-API接口开发流程参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/use-napi-process",
        children: "使用Node-API实现跨语言交互开发流程"
      }), "，本文仅对接口对应C++及ArkTS相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi_get_cb_info",
      children: "napi_get_cb_info"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取有关函数调用的详细信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"napi/native_api.h\"\n\n// napi_get_cb_info\n// 获取ArkTS侧入参的参数信息\nstatic napi_value GetCbArgs(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    return args[0];\n}\n\n// 获取ArkTS侧入参的参数个数\nstatic napi_value GetCbArgQuantity(napi_env env, napi_callback_info info)\n{\n    size_t argc = 0;\n    napi_value result = nullptr;\n    napi_get_cb_info(env, info, &argc, nullptr, nullptr, nullptr);\n    napi_create_int32(env, argc, &result);\n    return result;\n}\n\n// 获取ArkTS侧this参数\nstatic napi_value GetCbContext(napi_env env, napi_callback_info info)\n{\n    napi_value thisArg = nullptr;\n    napi_get_cb_info(env, info, nullptr, nullptr, &thisArg, nullptr);\n    return thisArg;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getCbArgs: <T>(arg: T) => T; // napi_get_cb_info\n\n// getCbArgQuantity的入参由用户自定义，在此用例中，我们用两个入参，一个是string，一个是number\nexport const getCbArgQuantity: (str: string, num: number) => number;\n\nexport const getCbContext: () => Object;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS 侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport testNapi from 'libentry.so';\n\nfunction summation(arr: Array<number>) {\n  let sum: number = 0;\n  for (let i = 0; i < arr.length; i++) {\n    sum += arr[i];\n  }\n  return sum;\n}\n\nconst str = 'message';\nconst arr = [0, 1, 2, 3, 4, 5];\nconst num = 526;\n\nclass Student {\n  name: string;\n  age: number;\n  score: number;\n\n  constructor(name: string, age: number, score: number) {\n    this.name = name;\n    this.age = age;\n    this.score = score;\n  }\n}\n\n// ...\n                  // napi_get_cb_info\n                  let student = new Student('Alice', 18, 100);\n                  // 获取参数\n                  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_cb_info get string arg:%{public}s',\n                    testNapi.getCbArgs(str));\n                  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_cb_info get array arg:%{public}s ',\n                    testNapi.getCbArgs(arr).toString());\n                  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_cb_info get num arg:%{public}d ',\n                    testNapi.getCbArgs(num));\n                  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_cb_info get undefined arg:%{public}s ',\n                    testNapi.getCbArgs(undefined));\n                  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_cb_info get object arg:%{public}s ',\n                    JSON.stringify(testNapi.getCbArgs(student)));\n                  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_cb_info get function arg:%{public}d ',\n                    testNapi.getCbArgs(summation(arr)));\n                  // 获取参数个数\n                  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_cb_info get arg quantity:%{public}d ',\n                    testNapi.getCbArgQuantity(str, num));\n                  // 获取上下文\n                  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_cb_info get thisArg:%{public}s ',\n                    testNapi.getCbContext().toString());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi_call_function",
      children: "napi_call_function"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在C/C++侧对ArkTS函数进行调用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注意事项：napi_call_function传入的argv的长度必须大于等于argc声明的数量，并且每个元素都应初始化为nullptr。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_call_function\nstatic napi_value CallFunction(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value argv[1] = {nullptr};\n    // 获取ArkTS侧入参\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    // 获取全局对象，这里用global是因为napi_call_function的第二个参数是JS函数的this入参。\n    napi_value global = nullptr;\n    napi_get_global(env, &global);\n    // 调用ArkTS方法\n    napi_value result = nullptr;\n    // 调用napi_call_function时传入的argv的长度必须大于等于argc声明的数量，且被初始化成nullptr\n    napi_call_function(env, global, argv[0], argc, argv, &result);\n    return result;\n}\n\nstatic napi_value ObjCallFunction(napi_env env, napi_callback_info info)\n{\n    // 获取ArkTS侧传递的两个参数\n    size_t argc = 2;\n    napi_value argv[2] = {nullptr};\n    // 获取ArkTS侧入参\n    napi_get_cb_info(env, info, &argc, argv, nullptr, nullptr);\n    // 调用ArkTS方法\n    napi_value result = nullptr;\n    // 调用napi_call_function时传入的argv的长度必须大于等于argc声明的数量，且被初始化成nullptr\n    napi_call_function(env, argv[0], argv[1], argc, argv, &result);\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const callFunction: (func: Function) => number; // napi_call_function\n\nexport const objCallFunction: (obj: Object, func: Function) => number;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS 侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function returnNumber() {\n  return 10;\n}\n\nclass Person {\n  age(): number {\n    return 11;\n  }\n}\n\n// ...\n                  // napi_call_function\n                  const person = new Person();\n                  hilog.info(0x0000, 'testTag', 'Test Node-API call_function:%{public}d',\n                    testNapi.callFunction(returnNumber));\n                  hilog.info(0x0000, 'testTag', 'Test Node-API call_function:%{public}d',\n                    testNapi.objCallFunction(person, person.age));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "napi_create_function",
      children: "napi_create_function"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将一个C/C++函数包装为可在ArkTS中调用的函数，并返回一个表示该函数的napi_value。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_function\nstatic napi_value CalculateArea(napi_env env, napi_callback_info info)\n{\n    // 获取ArkTS侧传递的两个参数\n    size_t argc = 2;\n    napi_value args[2] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n    double width = 0;\n    napi_get_value_double(env, args[0], &width);\n    double height = 0;\n    napi_get_value_double(env, args[1], &height);\n    napi_value area = nullptr;\n    napi_create_double(env, width * height, &area);\n    return area;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const calculateArea: (width: number, height: number) => number; // napi_create_function\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS 侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_function\nhilog.info(0x0000, 'testTag', 'Test Node-API create_function:%{public}d ',\n  testNapi.calculateArea(1.2, 4));\n"
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