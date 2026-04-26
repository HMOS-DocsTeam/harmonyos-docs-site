"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["653584"], {
791795(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_compilation_tool_chain_arkts_arkguard_bytecode_bytecode_obfuscation_overview_bytecode_obfuscation_overview_md_dc5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-compilation-tool-chain-arkts-arkguard-bytecode-bytecode-obfuscation-overview-bytecode-obfuscation-overview-md-dc5.json
var site_docs_arkts_arkts_compilation_tool_chain_arkts_arkguard_bytecode_bytecode_obfuscation_overview_bytecode_obfuscation_overview_md_dc5_namespaceObject = JSON.parse('{"id":"arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-overview/bytecode-obfuscation-overview","title":"ArkGuard字节码混淆工具概述","description":"从API version 20开始，ArkGuard提供了基础字节码混淆能力，将代码中的函数名、类名、文件名等名字变成简短无意义的名字，提高通过阅读代码猜测其用途的难度。由于标识符名称缩短，通过混淆可以有效降低包大小。","source":"@site/docs/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-overview/bytecode-obfuscation-overview.md","sourceDirName":"arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-overview","slug":"/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-overview/","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ArkGuard字节码混淆工具概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bytecode-obfuscation-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkGuard混淆常见问题","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation-questions/"},"next":{"title":"ArkGuard字节码混淆原理及功能","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-overview/bytecode-obfuscation-overview.md


const frontMatter = {
	title: 'ArkGuard字节码混淆工具概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bytecode-obfuscation-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkGuard字节码混淆工具概述';

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
        id: "arkguard字节码混淆工具概述",
        children: "ArkGuard字节码混淆工具概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 20开始，ArkGuard提供了基础字节码混淆能力，将代码中的函数名、类名、文件名等名字变成简短无意义的名字，提高通过阅读代码猜测其用途的难度。由于标识符名称缩短，通过混淆可以有效降低包大小。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "适用场景"
        })
      }), "：适用于对", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "安全性与防逆向"
        })
      }), "有较高要求的项目，尤其是涉及", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "敏感业务逻辑"
        })
      }), "、关键算法或专有接口实现的应用程序。建议在 release 构建中按需开启。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本章节详细介绍了ArkGuard字节码混淆工具的使用方法和特点，旨在帮助开发者高效地利用ArkGuard进行字节码混淆，从而提升代码的复杂度，增加逆向工程的难度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "相比源码混淆，字节码混淆的混淆对象是字节码文件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation",
          children: "ArkGuard字节码混淆原理及功能"
        }), "：说明混淆能力范围（包括默认混淆能力）、混淆流程机制以及各种混淆选项和保留选项的使用方法、混淆规则的合并策略。另外，介绍了ArkGuard在语言环境下的局限性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-guide",
          children: "ArkGuard字节码混淆开启指南"
        }), "：提供实操指南，包括如何开启字节码混淆功能、设置自定义混淆规则，以及如何查看混淆效果和进行报错栈还原。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-practice",
          children: "不同包类型的字节码混淆建议"
        }), "：针对不同类型的包（HAP、HAR、HSP）提供混淆策略建议。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-questions",
          children: "ArkGuard字节码混淆常见问题"
        }), "：说明", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard-bytecode/bytecode-obfuscation-questions#%E5%AD%97%E8%8A%82%E7%A0%81%E6%B7%B7%E6%B7%86%E4%B8%8E%E6%BA%90%E7%A0%81%E6%B7%B7%E6%B7%86%E5%B7%AE%E5%BC%82",
          children: "字节码混淆与源码混淆差异"
        }), "，总结常见的功能异常情况及其排查方法，并提供典型报错案例的解决方案，帮助开发者快速定位和解决混淆过程中遇到的问题。"]
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