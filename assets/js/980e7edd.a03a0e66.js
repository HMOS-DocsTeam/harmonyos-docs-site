"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["349426"], {
980473(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_debug_arkts_ide_debug_arkts_worker_taskpool_ide_debug_arkts_worker_taskpool_md_980_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-debug-arkts-ide-debug-arkts-worker-taskpool-ide-debug-arkts-worker-taskpool-md-980.json
var site_docs_ide_debug_app_ide_code_debugging_ide_debug_arkts_ide_debug_arkts_worker_taskpool_ide_debug_arkts_worker_taskpool_md_980_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-worker-taskpool/ide-debug-arkts-worker-taskpool","title":"调试场景说明","description":"DevEco Studio支持对ArkTS代码进行调试，包括以下场景。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-worker-taskpool/ide-debug-arkts-worker-taskpool.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-worker-taskpool","slug":"/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-worker-taskpool/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-worker-taskpool/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"调试场景说明","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-worker-taskpool","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"自定义运行/调试配置","permalink":"/harmonyos-docs-site/ide-debug-app/ide-run-debug-configurations/"},"next":{"title":"debug启动调试","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-debug/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-worker-taskpool/ide-debug-arkts-worker-taskpool.md


const frontMatter = {
	title: '调试场景说明',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-worker-taskpool',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '调试场景说明';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "调试场景说明",
        children: "调试场景说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio支持对ArkTS代码进行调试，包括以下场景。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-concurrency/multithread-concurrency/multi-thread-concurrency-overview",
          children: "Worker/TaskPool代码"
        }), "中添加断点进行调试。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["对", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/extensionability-overview",
          children: "Extension Ability"
        }), "生命周期函数进行调试，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-extension",
          children: "extension调试"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["部分设备上，UIAbility支持以独立进程的方式运行并调试，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-multi-process",
          children: "多进程调试"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在Native代码中，通过", (0,jsx_runtime.jsx)(_components.a, {
          href: "/coding/using-napi-interaction-with-cpp/napi-scenarios/use-napi-ark-runtime",
          children: "创建ArkTS运行时"
        }), "的方式调用ArkTS方法，在ArkTS代码中添加断点即可进行调试。（设备系统版本需要升级到6.0.0.35及以上）"]
      }), "\n"]
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