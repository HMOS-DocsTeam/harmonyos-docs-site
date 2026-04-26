"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["824828"], {
182658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_runtime_arkts_runtime_overview_arkts_runtime_overview_md_ff7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-runtime-arkts-runtime-overview-arkts-runtime-overview-md-ff7.json
var site_docs_arkts_arkts_runtime_arkts_runtime_overview_arkts_runtime_overview_md_ff7_namespaceObject = JSON.parse('{"id":"arkts/arkts-runtime/arkts-runtime-overview/arkts-runtime-overview","title":"ArkTS运行时概述","description":"ArkTS运行时是HarmonyOS上应用的默认语言运行时，支持ArkTS、TS和JS语言的字节码及相关标准库。它提供解释器、AOT和JIT高效执行方式，并通过Node-API实现完善的跨语言调用接口，支持多语言混合开发。","source":"@site/docs/arkts/arkts-runtime/arkts-runtime-overview/arkts-runtime-overview.md","sourceDirName":"arkts/arkts-runtime/arkts-runtime-overview","slug":"/arkts/arkts-runtime/arkts-runtime-overview/","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ArkTS运行时概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-runtime-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS跨语言交互","permalink":"/harmonyos-docs-site/arkts/arkts-cross-language-interaction/"},"next":{"title":"GC垃圾回收","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/gc-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-runtime/arkts-runtime-overview/arkts-runtime-overview.md


const frontMatter = {
	title: 'ArkTS运行时概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-runtime-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS运行时概述';

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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkts运行时概述",
        children: "ArkTS运行时概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS运行时是HarmonyOS上应用的默认语言运行时，支持ArkTS、TS和JS语言的字节码及相关标准库。它提供解释器、AOT和JIT高效执行方式，并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/using-napi-interaction-with-cpp/napi-introduction",
        children: "Node-API"
      }), "实现完善的跨语言调用接口，支持多语言混合开发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS Runtime主要由四个子系统组成："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Core Subsystem"
            })
          }), "：主要由与语言无关的基础运行库组成，其中包括承载字节码的File组件、支持Debugger的Tooling组件以及负责适配系统调用的Base库组件等。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Execution Subsystem"
            })
          }), "：包含执行方舟字节码的解释器、快速路径内联缓存以及", (0,jsx_runtime.jsx)(_components.a, {
            href: "/arkts/arkts-runtime/arkts-runtime-module/module-principle",
            children: "文件模块化管理运行"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compiler Subsystem"
            })
          }), "：包含Stub编译器、基于IR的编译优化框架、AOT静态编译器以及JIT动态编译器（实验中）。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Runtime Subsystem"
            })
          }), "：包含以下ArkTS/TS/JS运行相关的模块。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["内存管理：对象分配器与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/arkts/arkts-runtime/gc-introduction",
              children: "垃圾回收器"
            }), "（并发标记和部分内存压缩的CMS-GC和Partial-Compressing-GC）。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "分析工具：DFX工具、CPU和heap的profiling工具。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "并发管理：Actor并发模型中的方舟字节码文件管理器。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "标准库：ECMAScript规范定义的标准库、高效的container容器库与对象模型。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "其他：包括异步工作队列和C++交互的Node-API接口等功能。"
          }), "\n"]
        }), "\n"]
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