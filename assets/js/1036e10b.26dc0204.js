"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["785932"], {
93417(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_lldb_ide_debug_native_lldb_md_103_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-debug-native-ide-debug-native-lldb-ide-debug-native-lldb-md-103.json
var site_docs_ide_debug_app_ide_code_debugging_ide_debug_native_ide_debug_native_lldb_ide_debug_native_lldb_md_103_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-lldb/ide-debug-native-lldb","title":"使用LLDB调试命令","description":"在调试过程中，您可以在native调试窗口的lldb页面中执行lldb命令。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-lldb/ide-debug-native-lldb.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-lldb","slug":"/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-lldb/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-lldb/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"使用LLDB调试命令","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-lldb","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"查看内存信息","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-memory-view/"},"next":{"title":"反向调试","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-reverse/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-debug-native/ide-debug-native-lldb/ide-debug-native-lldb.md


const frontMatter = {
	title: '使用LLDB调试命令',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-native-lldb',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '使用LLDB调试命令';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    img: "img",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用lldb调试命令",
        children: "使用LLDB调试命令"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在调试过程中，您可以在native调试窗口的lldb页面中执行lldb命令。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(24379)/* ["default"] */.A) + "",
        width: "1357",
        height: "335"
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
24379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913026-ba27001d8f0ff9e56b0fabc35f3f2c53.png");

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