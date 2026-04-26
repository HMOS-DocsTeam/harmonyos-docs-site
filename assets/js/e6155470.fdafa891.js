"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["231019"], {
800662(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_data_terminology_data_terminology_md_e61_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-data-terminology-data-terminology-md-e61.json
var site_docs_arkdata_data_terminology_data_terminology_md_e61_namespaceObject = JSON.parse('{"id":"arkdata/data-terminology/data-terminology","title":"ArkData术语","description":"WAL模式","source":"@site/docs/arkdata/data-terminology/data-terminology.md","sourceDirName":"arkdata/data-terminology","slug":"/arkdata/data-terminology/","permalink":"/harmonyos-docs-site/arkdata/data-terminology/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"title":"ArkData术语","sidebar_position":10,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-terminology","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"SQLite调试工具指导","permalink":"/harmonyos-docs-site/arkdata/sqlite-database-debug-tool/"},"next":{"title":"ArkData常见问题","permalink":"/harmonyos-docs-site/arkdata/data-faq/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/data-terminology/data-terminology.md


const frontMatter = {
	title: 'ArkData术语',
	sidebar_position: 10,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/data-terminology',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkData术语';

const assets = {

};



const toc = [{
  "value": "WAL模式",
  "id": "wal模式",
  "level": 2
}, {
  "value": "FULL模式",
  "id": "full模式",
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
        id: "arkdata术语",
        children: "ArkData术语"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wal模式",
      children: "WAL模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WAL（Write Ahead Log）模式是SQLite日志模式中的一种，区别于传统的rollback journal（回滚日志）模式，用于提升并发性能和写入效率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细介绍，请查看SQLite ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://sqlite.org/wal.html",
        children: "Write-Ahead Logging"
      }), "介绍。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "full模式",
      children: "FULL模式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FULL模式是SQLite中数据库同步写入策略之一，当每次执行数据修改时，SQLite都会调用底层操作系统的xSync方法，保证所有数据均安全写入磁盘。可在系统崩溃、断电场景保证数据库不会损坏。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["详细介绍，请查看SQLite ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://sqlite.org/pragma.html#pragma_synchronous",
        children: "synchronous"
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