"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["729390"], {
536184(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_wrapper_object_use_jsvm_about_wrapper_object_md_42c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-wrapper-object-use-jsvm-about-wrapper-object-md-42c.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_wrapper_object_use_jsvm_about_wrapper_object_md_42c_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-wrapper-object/use-jsvm-about-wrapper-object","title":"使用JSVM-API接口进行Wrapper object相关开发","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-wrapper-object/use-jsvm-about-wrapper-object.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-wrapper-object","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-wrapper-object/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-wrapper-object/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":29,"frontMatter":{"title":"使用JSVM-API接口进行Wrapper object相关开发","sidebar_position":29,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-wrapper-object","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口进行Well-known symbols相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-well-known-symbols/"},"next":{"title":"使用JSVM-API接口创建和获取数值","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-basic-data-types/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-wrapper-object/use-jsvm-about-wrapper-object.md


const frontMatter = {
	title: '使用JSVM-API接口进行Wrapper object相关开发',
	sidebar_position: 29,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-wrapper-object',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口进行Wrapper object相关开发';

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
        id: "使用jsvm-api接口进行wrapper-object相关开发",
        children: "使用JSVM-API接口进行Wrapper object相关开发"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM-API中，装箱类型(Wrapper object)判断相关接口支持通过不同API快速判断object的装箱类型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在JSVM-API中，装箱类型相关接口提供快速判断5种装箱类型的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "OH_JSVM_IsNumberObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断是否是Number Object。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsBooleanObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断是否是Boolean Object。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsBigIntObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断是否是BigInt Object。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsStringObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断是否是String Object。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsSymbolObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断是否是Symbol Object。"
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
      }), "，本文仅展示接口对应的C++代码。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用接口判断是否是number-object",
      children: "使用接口判断是否是Number Object"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <string>\n\nstatic JSVM_Value WrapperObject(JSVM_Env env, JSVM_CallbackInfo info) {\n    JSVM_VM vm;\n    OH_JSVM_GetVM(env, &vm);\n\n    JSVM_HandleScope handleScope;\n    OH_JSVM_OpenHandleScope(env, &handleScope);\n    std::string src = R\"JS(new Number(42))JS\";\n    JSVM_Value jsSrc;\n    JSVM_Script script;\n    JSVM_Value result;\n\n    OH_JSVM_CreateStringUtf8(env, src.c_str(), JSVM_AUTO_LENGTH, &jsSrc);\n    OH_JSVM_CompileScript(env, jsSrc, nullptr, 0, true, nullptr, &script);\n    OH_JSVM_RunScript(env, script, &result);\n    bool isNumberObject = false;\n    OH_JSVM_IsNumberObject(env, result, &isNumberObject);\n    OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_IsNumberObject: %{public}d\\n\", isNumberObject);\n    OH_JSVM_CloseHandleScope(env, handleScope);\n\n    return nullptr;\n}\n\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = WrapperObject},\n};\n\nstatic JSVM_CallbackStruct *method = param;\n\n// wrapperObject方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"wrapperObject\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n\n// 样例测试JS\nconst char *srcCallNative = R\"JS(wrapperObject();)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期输出："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_IsNumberObject: 1\n"
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