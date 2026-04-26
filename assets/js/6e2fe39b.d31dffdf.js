"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["535298"], {
708096(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_arktsdoc_ide_arktsdocs_standard_label_ide_arktsdoc_copyright_ide_arktsdoc_copyright_md_6e2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-arktsdoc-ide-arktsdocs-standard-label-ide-arktsdoc-copyright-ide-arktsdoc-copyright-md-6e2.json
var site_docs_ide_code_edit_ide_arktsdoc_ide_arktsdocs_standard_label_ide_arktsdoc_copyright_ide_arktsdoc_copyright_md_6e2_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-arktsdoc/ide-arktsdocs-standard-label/ide-arktsdoc-copyright/ide-arktsdoc-copyright","title":"@copyright","description":"@copyright标签用于记录文件的版权信息。","source":"@site/docs/ide-code-edit/ide-arktsdoc/ide-arktsdocs-standard-label/ide-arktsdoc-copyright/ide-arktsdoc-copyright.md","sourceDirName":"ide-code-edit/ide-arktsdoc/ide-arktsdocs-standard-label/ide-arktsdoc-copyright","slug":"/ide-code-edit/ide-arktsdoc/ide-arktsdocs-standard-label/ide-arktsdoc-copyright/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-arktsdoc/ide-arktsdocs-standard-label/ide-arktsdoc-copyright/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"@copyright","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arktsdoc-copyright","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@author","permalink":"/harmonyos-docs-site/ide-code-edit/ide-arktsdoc/ide-arktsdocs-standard-label/ide-arktsdoc-author/"},"next":{"title":"@deprecated","permalink":"/harmonyos-docs-site/ide-code-edit/ide-arktsdoc/ide-arktsdocs-standard-label/ide-arktsdoc-deprecated/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-arktsdoc/ide-arktsdocs-standard-label/ide-arktsdoc-copyright/ide-arktsdoc-copyright.md


const frontMatter = {
	title: '@copyright',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arktsdoc-copyright',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@copyright';

const assets = {

};



const toc = [{
  "value": "语法",
  "id": "语法",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "copyright",
        children: "@copyright"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@copyright标签用于记录文件的版权信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "语法",
      children: "语法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@copyright <some copyright text>"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/**\n * @copyright Michael 2025\n */\nexport function myFunction() {}\n"
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