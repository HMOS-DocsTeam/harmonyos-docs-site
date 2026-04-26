"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["202222"], {
354813(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_arktsdoc_ide_arktsdocs_standard_label_ide_arktsdoc_param_ide_arktsdoc_param_md_e0f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-arktsdoc-ide-arktsdocs-standard-label-ide-arktsdoc-param-ide-arktsdoc-param-md-e0f.json
var site_docs_ide_code_edit_ide_arktsdoc_ide_arktsdocs_standard_label_ide_arktsdoc_param_ide_arktsdoc_param_md_e0f_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-arktsdoc/ide-arktsdocs-standard-label/ide-arktsdoc-param/ide-arktsdoc-param","title":"@param","description":"@param标签提供函数参数的描述信息。","source":"@site/docs/ide-code-edit/ide-arktsdoc/ide-arktsdocs-standard-label/ide-arktsdoc-param/ide-arktsdoc-param.md","sourceDirName":"ide-code-edit/ide-arktsdoc/ide-arktsdocs-standard-label/ide-arktsdoc-param","slug":"/ide-code-edit/ide-arktsdoc/ide-arktsdocs-standard-label/ide-arktsdoc-param/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-arktsdoc/ide-arktsdocs-standard-label/ide-arktsdoc-param/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"@param","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arktsdoc-param","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@deprecated","permalink":"/harmonyos-docs-site/ide-code-edit/ide-arktsdoc/ide-arktsdocs-standard-label/ide-arktsdoc-deprecated/"},"next":{"title":"@returns","permalink":"/harmonyos-docs-site/ide-code-edit/ide-arktsdoc/ide-arktsdocs-standard-label/ide-arktsdoc-returns/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-arktsdoc/ide-arktsdocs-standard-label/ide-arktsdoc-param/ide-arktsdoc-param.md


const frontMatter = {
	title: '@param',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-arktsdoc-param',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@param';

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
        id: "param",
        children: "@param"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@param标签提供函数参数的描述信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以通过在描述之前插入一个连字符（-），使ArkTSDoc注释更具可读性。连字符前后需使用空格隔开。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "语法",
      children: "语法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@param [<description>]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面的示例演示如何在 @param 标签中包含描述信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "变量说明："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/**\n * @param somebody Somebody's name.\n */\nexport function sayHello(somebody: string): void {\n  console.log('Hello ' + somebody);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以在变量说明前加个连字符（-），使之更加容易阅读："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/**\n * @param somebody - Somebody's name.\n */\nexport function sayHello(somebody: string): void {\n  console.log('Hello ' + somebody);\n}\n"
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