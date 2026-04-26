"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["693260"], {
983353(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkts_arkts_compilation_tool_chain_compilation_tool_chain_overview_compilation_tool_chain_overview_md_c37_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkts-arkts-compilation-tool-chain-compilation-tool-chain-overview-compilation-tool-chain-overview-md-c37.json
var site_docs_arkts_arkts_compilation_tool_chain_compilation_tool_chain_overview_compilation_tool_chain_overview_md_c37_namespaceObject = JSON.parse('{"id":"arkts/arkts-compilation-tool-chain/compilation-tool-chain-overview/compilation-tool-chain-overview","title":"ArkTS编译工具链概述","description":"ArkTS SDK提供了一套完整的编译工具链，以支持ArkTS的应用编译，通过集成至Hvigor编译任务的编排工具上，实现将应用的ArkTS/TS/JS源码编译生成方舟字节码文件（\\\\*.abc）。","source":"@site/docs/arkts/arkts-compilation-tool-chain/compilation-tool-chain-overview/compilation-tool-chain-overview.md","sourceDirName":"arkts/arkts-compilation-tool-chain/compilation-tool-chain-overview","slug":"/arkts/arkts-compilation-tool-chain/compilation-tool-chain-overview/","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/compilation-tool-chain-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ArkTS编译工具链概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/compilation-tool-chain-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkTS运行时常见问题","permalink":"/harmonyos-docs-site/arkts/arkts-runtime/arkts-runtime-faq/"},"next":{"title":"方舟字节码概述","permalink":"/harmonyos-docs-site/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkts/arkts-compilation-tool-chain/compilation-tool-chain-overview/compilation-tool-chain-overview.md


const frontMatter = {
	title: 'ArkTS编译工具链概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/compilation-tool-chain-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkTS编译工具链概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkts编译工具链概述",
        children: "ArkTS编译工具链概述"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkTS SDK提供了一套完整的编译工具链，以支持ArkTS的应用编译，通过集成至", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor",
        children: "Hvigor"
      }), "编译任务的编排工具上，实现将应用的ArkTS/TS/JS源码编译生成方舟字节码文件（*.abc）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["编译工具链在编译过程中首先执行语法转换，包括语法检查和UI转换。为确保源码安全，编译工具链使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-arkguard/source-obfuscation",
        children: "ArkGuard源码混淆工具"
      }), "对源码进行混淆操作。在字节码落盘之前，编译工具链会判断是否需要进行", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-bytecode/customize-bytecode-during-compilation",
        children: "字节码自定义修改"
      }), "，如果需要，则加载并执行自定义修改代码。在生成字节码文件后，开发者可以使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/tool-disassembler",
        children: "Disassembler反汇编工具"
      }), "查看字节码文件的内容。关于字节码的具体内容，可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkts/arkts-compilation-tool-chain/arkts-bytecode/arkts-bytecode-file-format",
        children: "方舟字节码文件格式"
      }), "章节。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS编译工具链目前主要包含以下功能："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "语法检查：检查ArkTS/TS语法正确性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UI转换：将UI声明式范式语法转换为标准TS语法。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "源码混淆：使用ArkGuard源码混淆工具对源码进行混淆，开发者可以根据具体业务需求选择开启。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "字节码编译：使用方舟编译器生成方舟字节码文件（*.abc）。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "自定义修改方舟字节码：提供开发者修改字节码能力的入口，在字节码编译落盘前调用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "反汇编：使用Disassembler反汇编工具将字节数据反汇编成可阅读的汇编指令。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS编译工具链在构建HAP流程如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(908509)/* ["default"] */.A) + "",
        width: "13306",
        height: "3638"
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
908509(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552957544-7fce2b492e7ef2bee9ffde996eca42e1.png");

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