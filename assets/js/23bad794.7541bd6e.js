"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["890778"], {
440470(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_date_use_napi_about_date_md_23b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-using-napi-interaction-with-cpp-napi-use-use-napi-about-date-use-napi-about-date-md-23b.json
var site_docs_coding_using_napi_interaction_with_cpp_napi_use_use_napi_about_date_use_napi_about_date_md_23b_namespaceObject = JSON.parse('{"id":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-date/use-napi-about-date","title":"使用Node-API接口进行Date相关开发","description":"简介","source":"@site/docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-date/use-napi-about-date.md","sourceDirName":"coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-date","slug":"/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-date/","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-date/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"使用Node-API接口进行Date相关开发","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-date","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Node-API接口注册和使用环境清理钩子","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-cleanuphook/"},"next":{"title":"使用Node-API接口进行错误处理开发","permalink":"/harmonyos-docs-site/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-error/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/using-napi-interaction-with-cpp/napi-use/use-napi-about-date/use-napi-about-date.md


const frontMatter = {
	title: '使用Node-API接口进行Date相关开发',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-napi-about-date',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Node-API接口进行Date相关开发';

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
  "value": "napi_create_date",
  "id": "napi_create_date",
  "level": 3
}, {
  "value": "napi_get_date_value",
  "id": "napi_get_date_value",
  "level": 3
}, {
  "value": "napi_is_date",
  "id": "napi_is_date",
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
        id: "使用node-api接口进行date相关开发",
        children: "使用Node-API接口进行Date相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node-API中date相关接口用于处理ArkTS Date对象，并在Node-API模块和ArkTS代码之间进行日期数据的转换和处理。这对于在Node-API模块中处理时间和日期相关逻辑非常有用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Node-API中，ArkTS Date对象的数据表示从UTC时间1970年1月1日0时0分0秒起至现在的总毫秒数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS Date对象提供了一种在ArkTS中表示和操作日期和时间的方式。它们允许您创建表示特定时刻的日期对象，执行各种日期和时间相关的计算（如添加或减去时间间隔），以及格式化日期为字符串以供显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在Node-API中，通过提供与Date对象交互的函数，Node-API模块能够更紧密地与ArkTS环境集成，执行更复杂的日期和时间相关操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景和功能介绍",
      children: "场景和功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以下Node-API函数通常在开发Node-API模块中与ArkTS的Date对象进行交互时使用，来处理和操作日期数据。以下是一些可能的使用场景："
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
            children: "napi_create_date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在需要根据当前系统时间或特定计算生成一个Date对象时，可通过使用此接口创建表示这些时间的ArkTS Date对象，然后将其传递给ArkTS代码进行进一步处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_get_date_value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在Node-API模块中接收到一个ArkTS的Date对象，并且需要获取其对应的时间戳或日期值时，可以使用此接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "napi_is_date"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在需要确定一个ArkTS对象是否为Date对象时，可使用此接口判断给定的值是否为Date对象。例如，在接收函数参数时，需要验证参数是否为Date对象以确保正确的数据类型。"
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
      }), "，本文仅对接口对应的C++及ArkTS相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_create_date",
      children: "napi_create_date"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过一个C++的double数据创建ArkTS的Date对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <hilog/log.h>\n#include \"napi/native_api.h\"\n\n// napi_create_date\nstatic napi_value CreateDate(napi_env env, napi_callback_info info)\n{\n    // 获取传入的Unix Time Stamp时间\n    double value = 1501924876711;\n    // 调用napi_create_date接口将double值转换成表示日期时间的ArkTS对象，并放入returnValue中\n    napi_value returnValue = nullptr;\n    napi_create_date(env, value, &returnValue);\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const createDate: () => Date; // napi_create_date\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_create_date\nhilog.info(0x0000, 'testTag', 'Test Node-API napi_create_date: %{public}s',\n  testNapi.createDate().toString());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_get_date_value",
      children: "napi_get_date_value"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取给定ArkTS Date对应的C++ double值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_date_value\nstatic napi_value GetDateValue(napi_env env, napi_callback_info info)\n{\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 获取传入的Unix Time Stamp时间\n    double value = 0;\n    napi_status status = napi_get_date_value(env, args[0], &value);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"napi_get_date_value fail\");\n        return nullptr;\n    }\n\n    // 将获取到的Unix Time Stamp时间打印\n    OH_LOG_INFO(LOG_APP, \"Node-API gets unix time stamp is:%{public}lf.\", value);\n\n    // 把转换后的Unix Time Stamp时间创建成ArkTS double数值，并放入returnValue中\n    napi_value returnValue = nullptr;\n    napi_create_double(env, value, &returnValue);\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const getDateValue: (date: Date) => number | undefined; // napi_get_date_value\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_get_date_value\ntry {\n  const date = new Date();\n  hilog.info(0x0000, 'testTag', 'Node-API: output the Unix Time Stamp: %{public}d', date.getTime());\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_get_date_value: %{public}d',\n    testNapi.getDateValue(date));\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_get_date_value error: %{public}s',\n    error.message);\n  // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "napi_is_date",
      children: "napi_is_date"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断给定ArkTS value是否为ArkTS Date对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_is_date\nstatic napi_value IsDate(napi_env env, napi_callback_info info)\n{\n    // 接受一个入参\n    size_t argc = 1;\n    napi_value args[1] = {nullptr};\n    napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);\n\n    // 调用napi_is_date接口判断给定入参是否为Date数据\n    bool result = false;\n    napi_status status = napi_is_date(env, args[0], &result);\n    if (status != napi_ok) {\n        napi_throw_error(env, nullptr, \"Node-API napi_is_date fail\");\n        return nullptr;\n    }\n    // 将结果转成napi_value类型返回\n    napi_value returnValue = nullptr;\n    napi_get_boolean(env, result, &returnValue);\n\n    return returnValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口声明"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export const isDate: <T>(date: T) => boolean | undefined; // napi_is_date\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS侧示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// napi_is_date\ntry {\n  let now: Date = new Date();\n  let date = \"123\";\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_is_date: %{public}s', testNapi.isDate(now));\n  hilog.info(0x0000, 'testTag', 'Test Node-API napi_is_date: %{public}s', testNapi.isDate(date));\n  // ...\n} catch (error) {\n  hilog.error(0x0000, 'testTag', 'Test Node-API napi_is_date error: %{public}s', error.message);\n  // ...\n}\n"
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