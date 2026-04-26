"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["118641"], {
961095(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_external_string_use_jsvm_about_external_string_md_915_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-external-string-use-jsvm-about-external-string-md-915.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_external_string_use_jsvm_about_external_string_md_915_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-external-string/use-jsvm-about-external-string","title":"使用JSVM-API接口提供Latin1/UTF16格式字符串相关开发","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-external-string/use-jsvm-about-external-string.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-external-string","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-external-string/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-external-string/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":26,"frontMatter":{"title":"使用JSVM-API接口提供Latin1/UTF16格式字符串相关开发","sidebar_position":26,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-external-string","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行private相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-private/"},"next":{"title":"使用JSVM-API提供的proxy接口","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-proxy/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-external-string/use-jsvm-about-external-string.md


const frontMatter = {
	title: '使用JSVM-API接口提供Latin1/UTF16格式字符串相关开发',
	sidebar_position: 26,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-external-string',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口提供Latin1/UTF16格式字符串相关开发';

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
  "value": "使用接口判断是否是Number Object",
  "id": "使用接口判断是否是number-object",
  "level": 3
}, {
  "value": "预期输出结果",
  "id": "预期输出结果",
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
        id: "使用jsvm-api接口提供latin1utf16格式字符串相关开发",
        children: "使用JSVM-API接口提供Latin1/UTF16格式字符串相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM-API中新增创建和使用外部字符串的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在JSVM-API中，在用户提供的Latin1/UTF16格式字符串所在内存上直接创建对应的JavaScript字符串，和正常的JavaScript字符串能够进行同样的操作。"
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
            children: "OH_JSVM_CreateExternalStringLatin1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用ISO-8859-1编码的C字符串，创建一个外部的JavaScript字符串。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_CreateExternalStringUtf16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用UTF16-LE编码的C字符串，创建一个外部的JavaScript字符串。"
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
      }), "，本文仅对接口对应C++相关代码进行展示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用接口判断是否是number-object",
      children: "使用接口判断是否是Number Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <cstring>\n#include <string>\nstatic char stringLatin1[] = \"hello\";\nstatic char16_t stringUTF16[] = u\"world\";\n\nstatic JSVM_Value testExternalString(JSVM_Env env, JSVM_CallbackInfo info) {\n    JSVM_VM vm;\n    OH_JSVM_GetVM(env, &vm);\n\n    JSVM_HandleScope handleScope;\n    OH_JSVM_OpenHandleScope(env, &handleScope);\n    JSVM_Value jsStrLatin1 = nullptr;\n    bool copied = true;\n    char buf[10];\n    OH_JSVM_CreateExternalStringLatin1(env, stringLatin1, strlen(stringLatin1), nullptr, nullptr,\n                                       &jsStrLatin1, &copied);\n    OH_JSVM_GetValueStringUtf8(env, jsStrLatin1, buf, 10, nullptr);\n    OH_LOG_INFO(LOG_APP, \"created latin1 string is : %{public}s\\n\", buf);\n    // 这里 copied 为 true 表示创建 external string 失败，否则表示创建成功\n    OH_LOG_INFO(LOG_APP, \"create external string failed : %{public}d\\n\", copied);\n    copied = true;\n    JSVM_Value jsStrUTF16 = nullptr;\n    OH_JSVM_CreateExternalStringUtf16(env, stringUTF16, std::char_traits<char16_t>::length(stringUTF16),\n                                      nullptr, nullptr, &jsStrUTF16, &copied);\n    OH_JSVM_GetValueStringUtf8(env, jsStrUTF16, buf, 10, nullptr);\n    OH_LOG_INFO(LOG_APP, \"created utf16 string is : %{public}s\\n\", buf);\n    // 这里 copied 为 true 表示创建 external string 失败，否则表示创建成功\n    OH_LOG_INFO(LOG_APP, \"create external string failed : %{public}d\\n\", copied);\n    OH_JSVM_CloseHandleScope(env, handleScope);\n\n    return nullptr;\n}\n\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = testExternalString},\n};\n\nstatic JSVM_CallbackStruct *method = param;\n\n// wrapperObject方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"testExternalString\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试JS\nconst char *srcCallNative = R\"JS(testExternalString();)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "预期输出结果",
      children: "预期输出结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "created latin1 string is : hello\ncreate external string failed: 0\ncreated utf16 string is : world\ncreate external string failed: 0\n"
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