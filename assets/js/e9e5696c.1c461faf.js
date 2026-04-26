"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["626010"], {
537919(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_hardware_compatibility_hw_guide_hw_guide_md_e9e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-hardware-compatibility-hw-guide-hw-guide-md-e9e.json
var site_docs_hardware_compatibility_hw_guide_hw_guide_md_e9e_namespaceObject = JSON.parse('{"id":"hardware-compatibility/hw-guide/hw-guide","title":"硬件兼容性简介","description":"使用C/C++开发HarmonyOS应用原生库时，需要感知到硬件特性；HarmonyOS系统会运行在多种架构、多厂商的设备上，对于使用了HarmonyOS原生库的应用，如何保证其在不同设备上的兼容性以及体验的一致性是一个很大的挑战。","source":"@site/docs/hardware-compatibility/hw-guide/hw-guide.md","sourceDirName":"hardware-compatibility/hw-guide","slug":"/hardware-compatibility/hw-guide/","permalink":"/harmonyos-docs-site/hardware-compatibility/hw-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"硬件兼容性简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hw-guide","kit":"ndk","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"LLDB高性能调试器","permalink":"/harmonyos-docs-site/debugging-profiling/debug-lldb/"},"next":{"title":"HarmonyOS ABI","permalink":"/harmonyos-docs-site/hardware-compatibility/ohos-abi/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/hardware-compatibility/hw-guide/hw-guide.md


const frontMatter = {
	title: '硬件兼容性简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/hw-guide',
	kit: 'ndk',
	last_updated: '2026-04-22'
};
const contentTitle = '硬件兼容性简介';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "硬件兼容性简介",
        children: "硬件兼容性简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用C/C++开发HarmonyOS应用原生库时，需要感知到硬件特性；HarmonyOS系统会运行在多种架构、多厂商的设备上，对于使用了HarmonyOS原生库的应用，如何保证其在不同设备上的兼容性以及体验的一致性是一个很大的挑战。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本章节将介绍HarmonyOS应用二进制接口（Application Binary Interface，简称ABI），定义了当前HarmonyOS系统支持的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/hardware-compatibility/ohos-abi",
        children: "ABI标准"
      }), "；同时也提供了如何使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/hardware-compatibility/cpu-features",
        children: "CPU扩展特性"
      }), "的指导，方便应用在不破坏兼容性的基础上更好的利用CPU硬件特性。最后通过一些简单的示例演示如何更好的使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/hardware-compatibility/neon-guide",
        children: "ARM Neon特性"
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