"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["489903"], {
349739(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_debug_app_ide_code_debugging_ide_debug_arkts_ide_debug_arkts_reverse_ide_debug_arkts_reverse_md_bb7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-debug-app-ide-code-debugging-ide-debug-arkts-ide-debug-arkts-reverse-ide-debug-arkts-reverse-md-bb7.json
var site_docs_ide_debug_app_ide_code_debugging_ide_debug_arkts_ide_debug_arkts_reverse_ide_debug_arkts_reverse_md_bb7_namespaceObject = JSON.parse('{"id":"ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-reverse/ide-debug-arkts-reverse","title":"反向调试","description":"针对ArkTS代码开发场景，DevEco Studio在提供基础调试能力的基础上，同时提供反向调试能力，供开发者进行调用栈回退。","source":"@site/docs/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-reverse/ide-debug-arkts-reverse.md","sourceDirName":"ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-reverse","slug":"/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-reverse/","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-reverse/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"反向调试","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-reverse","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"检查变量","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-variables/"},"next":{"title":"extension调试","permalink":"/harmonyos-docs-site/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-extension/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-debug-app/ide-code-debugging/ide-debug-arkts/ide-debug-arkts-reverse/ide-debug-arkts-reverse.md


const frontMatter = {
	title: '反向调试',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-debug-arkts-reverse',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '反向调试';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "反向调试",
        children: "反向调试"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "针对ArkTS代码开发场景，DevEco Studio在提供基础调试能力的基础上，同时提供反向调试能力，供开发者进行调用栈回退。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["程序中断时，在调用栈窗口右键单击，选择", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Restart Frame"
        })
      }), "，可以回退到上一个调用栈。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(736632)/* ["default"] */.A) + "",
        width: "1235",
        height: "418"
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
736632(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753753-8c8f2a071ebdd4a8307c6b5ceb2302a2.png");

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