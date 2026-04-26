"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["29524"], {
729534(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_compilation_tool_chain_arkts_arkguard_source_obfuscation_overview_source_obfuscation_overview_md_33b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-compilation-tool-chain-arkts-arkguard-source-obfuscation-overview-source-obfuscation-overview-md-33b.json
var site_docs_arkts_arkts_compilation_tool_chain_arkts_arkguard_source_obfuscation_overview_source_obfuscation_overview_md_33b_namespaceObject = JSON.parse('{"id":"arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-overview/source-obfuscation-overview","title":"ArkGuard源码混淆工具概述","description":"ArkGuard是一款源码混淆工具，提供基础混淆功能。它将代码中的变量名、函数名、类名、文件名等替换为简短无意义的标识符，增加通过阅读代码推测其功能的难度。混淆后，工程源码中的元素名称简化，有助于减小程序包的体积。","source":"@site/docs/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-overview/source-obfuscation-overview.md","sourceDirName":"arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-overview","slug":"/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-overview/","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ArkGuard源码混淆工具概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/source-obfuscation-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Disassembler反汇编工具","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/tool-disassembler/"},"next":{"title":"ArkGuard混淆原理及功能","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-overview/source-obfuscation-overview.md


const frontMatter = {
	title: 'ArkGuard源码混淆工具概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/source-obfuscation-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkGuard源码混淆工具概述';

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
        id: "arkguard源码混淆工具概述",
        children: "ArkGuard源码混淆工具概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkGuard是一款源码混淆工具，提供基础混淆功能。它将代码中的变量名、函数名、类名、文件名等替换为简短无意义的标识符，增加通过阅读代码推测其功能的难度。混淆后，工程源码中的元素名称简化，有助于减小程序包的体积。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节介绍ArkGuard源码混淆工具的使用方法和特点，帮助开发者高效利用ArkGuard进行源码混淆，提升代码复杂度，增加逆向工程难度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation",
          children: "ArkGuard混淆原理及功能"
        }), "：说明混淆能力范围、混淆流程机制、混淆选项和保留选项的使用方法、以及混淆规则的合并策略，以及混淆各功能起始API版本。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-guide",
          children: "ArkGuard混淆开启指南"
        }), "：提供实操指南，包括如何开启源码混淆功能、设置自定义混淆规则，以及如何查看混淆效果和进行报错栈还原。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-practice",
          children: "不同包类型的源码混淆建议"
        }), "：针对不同类型的包（HAP、HAR、HSP）提供混淆策略建议。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-questions",
          children: "ArkGuard混淆常见问题"
        }), "：总结常见的功能异常场景及其排查方法，提供典型报错案例的解决方案，帮助开发者快速定位和解决问题。"]
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