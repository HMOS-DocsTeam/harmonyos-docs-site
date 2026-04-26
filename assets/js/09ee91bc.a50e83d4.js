"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["712692"], {
499344(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_date_use_jsvm_about_date_md_09e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-date-use-jsvm-about-date-md-09e.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_date_use_jsvm_about_date_md_09e_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-date/use-jsvm-about-date","title":"使用JSVM-API接口进行Date相关开发","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-date/use-jsvm-about-date.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-date","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-date/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-date/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"使用JSVM-API接口进行Date相关开发","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-date","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行class相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-class/"},"next":{"title":"使用JSVM-API接口进行debug操作","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-debug-option/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-date/use-jsvm-about-date.md


const frontMatter = {
	title: '使用JSVM-API接口进行Date相关开发',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-date',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行Date相关开发';

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
  "value": "OH_JSVM_CreateDate",
  "id": "oh_jsvm_createdate",
  "level": 3
}, {
  "value": "OH_JSVM_GetDateValue",
  "id": "oh_jsvm_getdatevalue",
  "level": 3
}, {
  "value": "OH_JSVM_IsDate",
  "id": "oh_jsvm_isdate",
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
        id: "使用jsvm-api接口进行date相关开发",
        children: "使用JSVM-API接口进行Date相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM-API中date相关接口用于处理JavaScript Date对象，并在JSVM模块和JavaScript代码之间进行日期数据的转换和处理。这对于在JSVM模块中处理时间和日期相关逻辑非常有用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在JSVM-API中，JavaScript Date对象的数据表示从UTC时间1970年1月1日0时0分0秒起至现在的总毫秒数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JavaScript Date对象在JavaScript中用于表示和操作日期和时间。它们允许开发者创建表示特定时刻的日期对象，执行日期和时间计算（如添加或减去时间间隔），以及格式化日期为字符串以供显示。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在JSVM-API中，通过提供与Date对象交互的函数，JSVM模块能够更紧密地与JavaScript环境集成，执行复杂的日期和时间相关操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_CreateDate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个表示给定毫秒数的Date对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetDateValue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定JavaScript Date的时间值的Double基础类型值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsDate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断一个JavaScript对象是否为Date类型对象。"
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
      }), "，本文仅展示接口对应C++相关代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_createdate",
      children: "OH_JSVM_CreateDate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个表示给定毫秒数的Date对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <time.h>\n// OH_JSVM_CreateDate的样例方法\nstatic JSVM_Value CreateDate(JSVM_Env env, JSVM_CallbackInfo info) {\n    // 通过c接口获取Unix纪元以来经过的秒数，并转化为毫秒数为单位\n    double value = static_cast<double>(static_cast<uint64_t>(time(NULL)) * 1000ULL);\n    // 调用OH_JSVM_CreateDate接口将double值转换成表示日期时间的JavaScript值返回出去\n    JSVM_Value returnValue = nullptr;\n\n    JSVM_CALL(OH_JSVM_CreateDate(env, value, &returnValue));\n\n    bool isDate = false;\n    JSVM_CALL(OH_JSVM_IsDate(env, returnValue, &isDate));\n    if (!isDate) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM IsDate fail\");\n        return returnValue;\n    }\n\n    value = 0;\n    JSVM_CALL(OH_JSVM_GetDateValue(env, returnValue, &value));\n\n    uint64_t time = static_cast<uint64_t>(value) / 1000;\n    char *date = ctime(reinterpret_cast<time_t *>(&time));\n    OH_LOG_INFO(LOG_APP, \"JSVM CreateDate success:%{public}s\", date);\n\n    return returnValue;\n}\n\n// CreateDate注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = CreateDate},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateDate方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"createDate\", nullptr, method, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(createDate())JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM CreateDate success:Mon Jul 7 10:42:34 2025\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_getdatevalue",
      children: "OH_JSVM_GetDateValue"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取给定JavaScript Date的时间值的Double基础类型值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <ctime>\n// OH_JSVM_GetDateValue的样例方法\nstatic JSVM_Value GetDateValue(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr));\n    // 获取传入的Unix Time Stamp时间\n    double value = 0;\n    JSVM_CALL(OH_JSVM_GetDateValue(env, args[0], &value));\n   \n    // 将获取到的Unix Time Stamp时间转化为日期字符串打印\n    uint64_t time = static_cast<uint64_t>(value) / 1000;\n    char *date = ctime(reinterpret_cast<time_t *>(&time));\n    OH_LOG_INFO(LOG_APP, \"JSVM GetDateValue success:%{public}s\", date);\n   \n    JSVM_Value returnValue = nullptr;\n    JSVM_CALL(OH_JSVM_CreateDouble(env, value, &returnValue));\n    return returnValue;\n}\n\n// CreateDate注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetDateValue},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateDate方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getDateValue\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(getDateValue(new Date(Date.now())))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM GetDateValue success:Mon Jul 7 10:47:08 2025\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_isdate",
      children: "OH_JSVM_IsDate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断一个JavaScript对象是否为Date类型对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// OH_JSVM_IsDate的样例方法\nstatic JSVM_Value IsDate(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr));\n    bool isDate = false;\n    JSVM_CALL(OH_JSVM_IsDate(env, args[0], &isDate));\n    OH_LOG_INFO(LOG_APP, \"JSVM IsDate success:%{public}d\", isDate);\n    \n    JSVM_Value result = nullptr;\n    JSVM_CALL(OH_JSVM_GetBoolean(env, isDate, &result));\n    return result;\n}\n// CreateDate注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = IsDate},\n};\nstatic JSVM_CallbackStruct *method = param;\n// CreateDate方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"isDate\", nullptr, method, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n// 样例测试js\nconst char *srcCallNative = R\"JS(isDate(new Date(Date.now())))JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM IsDate success:1\n"
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