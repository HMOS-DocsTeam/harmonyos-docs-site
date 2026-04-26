"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["966619"], {
331514(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_coding_openmp_openmp_overview_openmp_overview_md_6b7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-coding-openmp-openmp-overview-openmp-overview-md-6b7.json
var site_docs_coding_openmp_openmp_overview_openmp_overview_md_6b7_namespaceObject = JSON.parse('{"id":"coding/openmp/openmp-overview/openmp-overview","title":"OpenMP简介","description":"OpenMP（Open Multi-Processing）是一套支持跨平台共享内存方式的多线程并发的编程API，由一套编译器指令、库和一些能够影响运行行为的环境变量构成，提供了对并行算法的高层抽象描述，适合在多核CPU机器上的并行程序设计。编译器根据程序中添加的pragma指令，自动将pragma指令标记的程序片段并行处理，使用OpenMP可以降低并行编程的复杂度。","source":"@site/docs/coding/openmp/openmp-overview/openmp-overview.md","sourceDirName":"coding/openmp/openmp-overview","slug":"/coding/openmp/openmp-overview/","permalink":"/harmonyos-docs-site/coding/openmp/openmp-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"OpenMP简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/openmp-overview","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Longque-JS-API使用指导","permalink":"/harmonyos-docs-site/coding/longque/use-longque-js-api/"},"next":{"title":"OpenMP应用构建和运行指南","permalink":"/harmonyos-docs-site/coding/openmp/openmp-guideline/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/coding/openmp/openmp-overview/openmp-overview.md


const frontMatter = {
	title: 'OpenMP简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/openmp-overview',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = 'OpenMP简介';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "版本说明",
  "id": "版本说明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "openmp简介",
        children: "OpenMP简介"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.openmp.org/",
        children: "OpenMP（Open Multi-Processing）"
      }), "是一套支持跨平台共享内存方式的多线程并发的编程API，由一套编译器指令、库和一些能够影响运行行为的环境变量构成，提供了对并行算法的高层抽象描述，适合在多核CPU机器上的并行程序设计。编译器根据程序中添加的pragma指令，自动将pragma指令标记的程序片段并行处理，使用OpenMP可以降低并行编程的复杂度。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OpenMP广泛应用于科学计算、图像处理、机器学习、金融计算、生物信息学等需要高性能计算的领域，尤其适合解决计算密集型任务和数据并行问题。它通过简化多核并行化的开发流程，帮助开发者高效利用现代处理器的多核资源，解决了传统并行编程中线程管理复杂、任务负载不均、性能瓶颈等问题。借助OpenMP的灵活调度机制和跨平台支持，程序能够显著提升性能，同时保持代码的简洁性和可移植性，是提高开发效率和计算效率的关键工具。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "版本说明",
      children: "版本说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前HarmonyOS中的OpenMP库采用", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/llvm/llvm-project/releases/tag/llvmorg-15.0.4",
        children: "llvm 15.0.4"
      }), "中的实现，对应OpenMP API版本请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://clang.llvm.org/docs/OpenMPSupport.html",
        children: "clang-OpenMPSupport"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HarmonyOS应用中使用OpenMP请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/coding/openmp/openmp-guideline",
        children: "OpenMP应用构建和运行指南"
      }), "。"]
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