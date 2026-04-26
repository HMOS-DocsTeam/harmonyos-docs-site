"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["375873"], {
179398(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_compilation_tool_chain_arkts_bytecode_arkts_bytecode_overview_arkts_bytecode_overview_md_606_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-compilation-tool-chain-arkts-bytecode-arkts-bytecode-overview-arkts-bytecode-overview-md-606.json
var site_docs_arkts_arkts_compilation_tool_chain_arkts_bytecode_arkts_bytecode_overview_arkts_bytecode_overview_md_606_namespaceObject = JSON.parse('{"id":"arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-overview/arkts-bytecode-overview","title":"方舟字节码概述","description":"方舟字节码文件是ArkTS/TS/JS源码编译后的二进制产物。本章节介绍方舟字节码文件的各个部分，以帮助开发者深入了解字节码文件内容，进行字节码的分析和修改。","source":"@site/docs/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-overview/arkts-bytecode-overview.md","sourceDirName":"arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-overview","slug":"/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-overview/","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"方舟字节码概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-bytecode-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS编译工具链概述","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/compilation-tool-chain-overview/"},"next":{"title":"方舟字节码文件格式","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-file-format/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-overview/arkts-bytecode-overview.md


const frontMatter = {
	title: '方舟字节码概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-bytecode-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '方舟字节码概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
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
        id: "方舟字节码概述",
        children: "方舟字节码概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "方舟字节码文件是ArkTS/TS/JS源码编译后的二进制产物。本章节介绍方舟字节码文件的各个部分，以帮助开发者深入了解字节码文件内容，进行字节码的分析和修改。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方舟字节码文件格式：介绍字节码文件中包含的各个部分的结构信息，以及各种结构的存储方式和映射关系。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方舟字节码基本原理：介绍字节码中构成指令的重要概念和具体的指令格式及含义，帮助开发者了解方舟字节码指令，进行指令相关的特性开发工作。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "方舟字节码函数命名规则：介绍字节码文件中函数名字的字符串的命名规则。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "编译期自定义修改方舟字节码：介绍如何修改字节码文件的内容。"
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