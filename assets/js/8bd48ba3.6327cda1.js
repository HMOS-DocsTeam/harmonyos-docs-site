"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["32220"], {
981057(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_jsvm_jsvm_use_use_jsvm_about_version_use_jsvm_about_version_md_8bd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-jsvm-jsvm-use-use-jsvm-about-version-use-jsvm-about-version-md-8bd.json
var site_docs_coding_jsvm_jsvm_use_use_jsvm_about_version_use_jsvm_about_version_md_8bd_namespaceObject = JSON.parse('{"id":"coding/jsvm/jsvm-use/use-jsvm-about-version/use-jsvm-about-version","title":"使用JSVM-API接口获取JSVM API的版本号","description":"简介","source":"@site/docs/coding/jsvm/jsvm-use/use-jsvm-about-version/use-jsvm-about-version.md","sourceDirName":"coding/jsvm/jsvm-use/use-jsvm-about-version","slug":"/coding/jsvm/jsvm-use/use-jsvm-about-version/","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-version/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"title":"使用JSVM-API接口获取JSVM API的版本号","sidebar_position":17,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-version","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用JSVM-API接口创建和获取string值","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-about-string/"},"next":{"title":"使用JSVM-API接口进行错误处理开发","permalink":"/harmonyos-docs-site/coding/jsvm/jsvm-use/use-jsvm-error/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/jsvm/jsvm-use/use-jsvm-about-version/use-jsvm-about-version.md


const frontMatter = {
	title: '使用JSVM-API接口获取JSVM API的版本号',
	sidebar_position: 17,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/use-jsvm-about-version',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '使用JSVM-API接口获取JSVM API的版本号';

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
}, {
  "value": "OH_JSVM_GetVersion &amp;&amp; OH_JSVM_GetVMInfo",
  "id": "oh_jsvm_getversion--oh_jsvm_getvminfo",
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
        id: "使用jsvm-api接口获取jsvm-api的版本号",
        children: "使用JSVM-API接口获取JSVM API的版本号"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "简介",
      children: "简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于获取当前JSVM API的版本信息。"
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
            children: "OH_JSVM_GetVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取JSVM运行时支持的最高JSVM API版本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OH_JSVM_GetVMInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取虚拟机的信息。"
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
      id: "oh_jsvm_getversion--oh_jsvm_getvminfo",
      children: "OH_JSVM_GetVersion && OH_JSVM_GetVMInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取当前环境支持的JSVM API的最高版本号和当前虚拟机的信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "cpp部分代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// hello.cpp\n#include <string.h>\n\n// OH_JSVM_GetVersion的样例方法\nstatic JSVM_Value GetVersion(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    uint32_t jsVersion = 0;\n    // 调用接口，获取当前JSVM运行时支持的最高JSVM API版本\n    JSVM_CALL(OH_JSVM_GetVersion(env, &jsVersion));\n    int value = static_cast<int>(jsVersion);\n    OH_LOG_INFO(LOG_APP, \"JSVM GetVersion success:%{public}d\", value);\n    return nullptr;\n}\n\n// OH_JSVM_GetVMInfo的样例方法\n// 打印JSVM（JavaScript虚拟机）的各项信息\nvoid PrintVmInfo(JSVM_VMInfo vmInfo) {\n    OH_LOG_INFO(LOG_APP, \"JSVM API apiVersion: %{public}d\", vmInfo.apiVersion);\n    OH_LOG_INFO(LOG_APP, \"JSVM API engine: %{public}s\", vmInfo.engine);\n    OH_LOG_INFO(LOG_APP, \"JSVM API version: %{public}s\", vmInfo.version);\n    OH_LOG_INFO(LOG_APP, \"JSVM API cachedDataVersionTag: 0x%{public}x\", vmInfo.cachedDataVersionTag);\n}\n\nstatic JSVM_Value GetVMInfo(JSVM_Env env, JSVM_CallbackInfo info)\n{\n    // 调用接口，获取虚拟机的信息\n    JSVM_VMInfo result;\n    JSVM_CALL(OH_JSVM_GetVMInfo(&result));\n    // 输出VM虚拟机信息\n    PrintVmInfo(result);\n    return nullptr;\n}\n\n// 待执行的js代码\nstatic const char *srcCallNative = R\"JS(getVersion();getVMInfo();)JS\";\n\n// GetVersion, GetVMInfo注册回调\nstatic JSVM_CallbackStruct param[] = {\n    {.data = nullptr, .callback = GetVersion},\n    {.data = nullptr, .callback = GetVMInfo},\n};\nstatic JSVM_CallbackStruct *method = param;\n// GetVersion, GetVMInfo方法别名，供JS调用\nstatic JSVM_PropertyDescriptor descriptor[] = {\n    {\"getVersion\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n    {\"getVMInfo\", nullptr, method++, nullptr, nullptr, nullptr, JSVM_DEFAULT},\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "预期结果："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JSVM GetVersion success:9\nJSVM API apiVersion: 1\nJSVM API engine: v8\nJSVM API version: 13.2.152.41\nJSVM API cachedDataVersionTag: 0x81ff9402\n"
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