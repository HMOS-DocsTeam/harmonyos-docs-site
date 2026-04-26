"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["369054"], {
767827(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_overview_arkts_overview_md_4a1_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-overview-arkts-overview-md-4a1.json
var site_docs_arkts_arkts_overview_arkts_overview_md_4a1_namespaceObject = JSON.parse('{"id":"arkts/arkts-overview/arkts-overview","title":"ArkTS简介","description":"ArkTS是HarmonyOS应用开发的官方高级语言。","source":"@site/docs/arkts/arkts-overview/arkts-overview.md","sourceDirName":"arkts/arkts-overview","slug":"/arkts/arkts-overview/","permalink":"/harmonyos-docs-site/arkts/arkts-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ArkTS简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkData常见问题","permalink":"/harmonyos-docs-site/arkdata/data-faq/"},"next":{"title":"ArkTS基础类库概述","permalink":"/harmonyos-docs-site/arkts/arkts-utils/arkts-utils-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-overview/arkts-overview.md


const frontMatter = {
	title: 'ArkTS简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS简介';

const assets = {

};



const toc = [{
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
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
        id: "arkts简介",
        children: "ArkTS简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS是HarmonyOS应用开发的官方高级语言。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.typescriptlang.org/",
        children: "TypeScript"
      }), "（简称TS）生态基础上做了进一步扩展，保持了TS的基本风格，同时通过规范定义强化开发期静态检查和分析，提升代码健壮性，并实现更好的程序执行稳定性和性能。对比标准TS的差异可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/learning-arkts/typescript-to-arkts-migration/typescript-to-arkts-migration-guide",
        children: "从TypeScript到ArkTS的适配规则"
      }), "。ArkTS同时也支持与TS/JavaScript（简称JS）高效互操作。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS基础类库和容器类库增强了语言的基础功能，提供包括", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkts-api/arkts-arkts/js-apis-arkts-decimal/js-apis-arkts-decimal",
        children: "高精度浮点运算"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-utils/buffer",
        children: "二进制Buffer"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-utils/xml-generation-parsing-conversion/xml-overview",
        children: "XML生成解析转换"
      }), "和多种容器库等能力，协助开发者简化开发工作，提升开发效率。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对TS/JS并发能力支持有限的问题，ArkTS对并发编程API和能力进行了增强，提供了", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction",
        children: "TaskPool"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-concurrency/multithread-concurrency/worker-introduction",
        children: "Worker"
      }), "两种并发API供开发者选择。另外，ArkTS进一步提出了Sendable的概念来支持对象在并发实例间的引用传递，提升ArkTS对象在并发实例间的通信性能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方舟编译运行时（ArkCompiler）支持ArkTS、TS和JS的编译运行，目前主要分为ArkTS编译工具链和ArkTS运行时两部分。ArkTS编译工具链负责将高级语言编译为方舟字节码文件（*.abc），ArkTS运行时则负责在设备侧运行字节码文件，执行程序逻辑。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "未来，ArkTS会结合应用开发/运行的需求持续演进，逐步提供并发能力增强、系统类型增强、分布式开发范式等更多特性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器，但与真机存在部分能力差异，具体差异如下。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通用差异：请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification#section1227613205203",
          children: "模拟器与真机的差异"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ArkTS基础库与ArkTS并发暂不支持模拟器。"
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