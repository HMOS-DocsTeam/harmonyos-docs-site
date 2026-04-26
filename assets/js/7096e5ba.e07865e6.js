"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["242139"], {
987044(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_json_use_jsvm_about_json_md_709_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-json-use-jsvm-about-json-md-709.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_json_use_jsvm_about_json_md_709_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-json/use-jsvm-about-json","title":"使用JSVM-API接口进行JSON操作","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-json/use-jsvm-about-json.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-json","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-json/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-json/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"使用JSVM-API接口进行JSON操作","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-json","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行函数创建和调用","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-function-call/"},"next":{"title":"使用JSVM-API接口进行array相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-array/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-json/use-jsvm-about-json.md


const frontMatter = {
	title: '使用JSVM-API接口进行JSON操作',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-json',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行JSON操作';

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
  "value": "OH_JSVM_JsonParse &amp; OH_JSVM_JsonStringify",
  "id": "oh_jsvm_jsonparse--oh_jsvm_jsonstringify",
  "level": 3
}, {
  "value": "预期结果：",
  "id": "预期结果",
  "level": 2
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
        id: "使用jsvm-api接口进行json操作",
        children: "使用JSVM-API接口进行JSON操作"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用JSVM-API接口操作JSON数据时，JSVM模块中的相关接口可以直接处理JSON格式的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "JSON（JavaScript Object Notation）"
          })
        }), "：是一种常见的数据交换格式，用于前后端数据的传递、存储和交流。可以与多种编程语言进行交互，在JavaScript中被广泛应用于数据处理。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_JsonParse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解析JSON字符串，并将结果存储在JSON对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_JsonStringify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "将对象字符串化，并将结果存储在JSVM字符串对象。"
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
      }), "，本文仅展示接口对应的C++相关代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "oh_jsvm_jsonparse--oh_jsvm_jsonstringify",
      children: "OH_JSVM_JsonParse & OH_JSVM_JsonStringify"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解析JSON对象，并输出有效的解析结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include <string>\n\n// 解析JSON数字\nstatic JSVM_Value JsonParseNumber(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 设置要解析的JSON数字\n    std::string strNumber = \"10.555\";\n    JSVM_Value jsonString = nullptr;\n    JSVM_CALL(OH_JSVM_CreateStringUtf8(env, strNumber.c_str(), strNumber.size(), &jsonString));\n    JSVM_Value jsonObject = nullptr;\n    // 调用OH_JSVM_JsonParse函数解析JSON数字，并将结果存储在JSON对象中\n    JSVM_CALL(OH_JSVM_JsonParse(env, jsonString, &jsonObject));\n    double number = 0.0f;\n    JSVM_CALL(OH_JSVM_GetValueDouble(env, jsonObject, &number));\n    OH_LOG_INFO(LOG_APP, \"Test JSVM jsonParseNumber: %{public}f\", number);\n    return nullptr;\n}\n\n// 解析JSON字符串中的对象\nstatic JSVM_Value JsonParseObject(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 设置要解析的JSON对象字符串\n    std::string strObject = \"{\\\"first\\\": \\\"one\\\", \\\"second\\\": \\\"two\\\", \\\"third\\\": \\\"three\\\"}\";\n    JSVM_Value strJson = nullptr;\n    JSVM_CALL(OH_JSVM_CreateStringUtf8(env, strObject.c_str(), strObject.size(), &strJson));\n    JSVM_Value jsonObject = nullptr;\n    // 调用OH_JSVM_JsonParse函数解析JSON对象字符串，并将结果存储在JSON对象中\n    JSVM_CALL(OH_JSVM_JsonParse(env, strJson, &jsonObject));\n    JSVM_Value jsonString = nullptr;\n    // 调用OH_JSVM_JsonStringify函数将对象转换为字符串格式，并将结果存储在JSVM字符串对象中\n    JSVM_CALL(OH_JSVM_JsonStringify(env, jsonObject, &jsonString));\n    size_t totalLen = 0;\n    JSVM_CALL(OH_JSVM_GetValueStringUtf8(env, jsonString, nullptr, 0, &totalLen));\n    size_t needLen = totalLen + 1;\n    char* buff = new char[needLen];\n    JSVM_CALL(OH_JSVM_GetValueStringUtf8(env, jsonString, buff, needLen, &totalLen));\n    OH_LOG_INFO(LOG_APP, \"Test JSVM jsonParseObject: %{public}s\", buff);\n    delete[] buff;\n    return nullptr;\n}\n\n// JsonParse注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = JsonParseNumber},\n    {.data = nullptr, .callback = JsonParseObject},\n};\n\nstatic JSVM_CallbackStruct *method = param;\n\nJSVM_PropertyDescriptor descriptor[] = {\n    {\"jsonParseNumber\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n    {\"jsonParseObject\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 待执行的js代码\nstatic const char *srcCallNative = R\"JS(jsonParseNumber();jsonParseObject();)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预期结果",
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Test JSVM jsonParseNumber: 10.555000\n\nTest JSVM jsonParseObject: {\"first\":\"one\",\"second\":\"two\",\"third\":\"three\"}\n"
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