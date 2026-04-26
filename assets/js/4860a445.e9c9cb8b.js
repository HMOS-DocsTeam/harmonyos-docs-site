"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["662012"], {
135035(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_proxy_use_jsvm_about_proxy_md_486_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-proxy-use-jsvm-about-proxy-md-486.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_proxy_use_jsvm_about_proxy_md_486_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-proxy/use-jsvm-about-proxy","title":"使用JSVM-API提供的proxy接口","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-proxy/use-jsvm-about-proxy.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-proxy","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-proxy/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-proxy/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":27,"frontMatter":{"title":"使用JSVM-API提供的proxy接口","sidebar_position":27,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-proxy","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口提供Latin1/UTF16格式字符串相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-external-string/"},"next":{"title":"使用JSVM-API接口进行Well-known symbols相关开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-well-known-symbols/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-proxy/use-jsvm-about-proxy.md


const frontMatter = {
	title: '使用JSVM-API提供的proxy接口',
	sidebar_position: 27,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-proxy',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API提供的proxy接口';

const assets = {

};



const toc = [{
  "value": "简介",
  "id": "简介",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "使用示例",
  "id": "使用示例",
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
        id: "使用jsvm-api提供的proxy接口",
        children: "使用JSVM-API提供的proxy接口"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JSVM-API 提供了创建 Proxy、判断 JSVM_Value 是否为 Proxy 类型和获取 Proxy 中的目标对象的接口。"
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
            children: "OH_JSVM_CreateProxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建 Proxy，等价于在 js 中执行 new Proxy(target, handler)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_IsProxy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断传入的 JSVM_Value 是否为 Proxy 类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_ProxyGetTarget"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取给定 proxy 的目标对象"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp 部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// OH_JSVM_CreateProxy 的样例方法\nstatic JSVM_Value CreateProxy(JSVM_Env env, JSVM_CallbackInfo info) {\n    // 接受两个入参，第 1 个参数为 target，第 2 个参数为 handler\n    size_t argc = 2;\n    JSVM_Value args[2] = {nullptr};\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr));\n    // 用 OH_JSVM_CreateProxy 为目标对象创建代理\n    JSVM_Value result = nullptr;\n    JSVM_Status status = OH_JSVM_CreateProxy(env, args[0], args[1], &result);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_CreateProxy: failed: %{public}d\", status);\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_CreateProxy: success\");\n    }\n\n    return result;\n}\n\n// OH_JSVM_IsProxy 的样例方法\nstatic JSVM_Value IsProxy(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr));\n    // 调用 OH_JSVM_IsProxy 判断 JSVM_Value 是否为代理\n    bool result = false;\n    JSVM_Status status = OH_JSVM_IsProxy(env, args[0], &result);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_IsProxy: failed\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_IsProxy: success: %{public}s\", result ? \"is a proxy\" : \"is not a proxy\");\n    }\n    JSVM_Value isProxy;\n    JSVM_CALL(OH_JSVM_GetBoolean(env, result, &isProxy));\n    return isProxy;\n}\n\n// OH_JSVM_ProxyGetTarget 的样例方法\nstatic JSVM_Value GetProxyTarget(JSVM_Env env, JSVM_CallbackInfo info) {\n    size_t argc = 1;\n    JSVM_Value args[1] = {nullptr};\n    JSVM_CALL(OH_JSVM_GetCbInfo(env, info, &argc, args, nullptr, nullptr));\n    // 调用 OH_JSVM_ProxyGetTarget 获取代理中的目标对象\n    JSVM_Value result = nullptr;\n    JSVM_Status status = OH_JSVM_ProxyGetTarget(env, args[0], &result);\n    if (status != JSVM_OK) {\n        OH_LOG_ERROR(LOG_APP, \"JSVM OH_JSVM_ProxyGetTarget: failed\");\n    } else {\n        OH_LOG_INFO(LOG_APP, \"JSVM OH_JSVM_ProxyGetTarget: success\");\n    }\n\n    return result;\n}\n\n// Proxy 相关回调注册\nstatic JSVM_CallbackStruct param[] = {{.data = nullptr, .callback = CreateProxy},\n                                      {.data = nullptr, .callback = IsProxy},\n                                      {.data = nullptr, .callback = GetProxyTarget}};\nstatic JSVM_CallbackStruct *method = param;\n// Proxy 相关回调别名\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"CreateProxy\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n    {\"IsProxy\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n    {\"GetProxyTarget\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT}};\n\nconst char *srcCallNative = R\"JS(\n       target = {\n         message1: \"hello\",\n         message2: \"everyone\",\n       };\n\n       handler = {\n         get(target, prop, receiver) {\n           return \"world\";\n         },\n       };\n\n       proxy = CreateProxy(target, handler)\n       isProxy = IsProxy(proxy)\n       target1 = GetProxyTarget(proxy)\n)JS\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期的输出结果"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM OH_JSVM_CreateProxy: success\nJSVM OH_JSVM_IsProxy: success: is a proxy\nJSVM OH_JSVM_ProxyGetTarget: success\n"
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