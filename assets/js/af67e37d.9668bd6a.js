"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["480107"], {
754909(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkdata_app_data_persistence_app_data_persistence_overview_app_data_persistence_overview_md_af6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkdata-app-data-persistence-app-data-persistence-overview-app-data-persistence-overview-md-af6.json
var site_docs_arkdata_app_data_persistence_app_data_persistence_overview_app_data_persistence_overview_md_af6_namespaceObject = JSON.parse('{"id":"arkdata/app-data-persistence/app-data-persistence-overview/app-data-persistence-overview","title":"应用数据持久化概述","description":"应用数据持久化是指应用将内存中的数据通过文件或数据库的形式保存到设备上。内存中的数据形态通常是任意的数据结构或数据对象，存储介质上的数据形态可能是文本、数据库、二进制文件等。","source":"@site/docs/arkdata/app-data-persistence/app-data-persistence-overview/app-data-persistence-overview.md","sourceDirName":"arkdata/app-data-persistence/app-data-persistence-overview","slug":"/arkdata/app-data-persistence/app-data-persistence-overview/","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/app-data-persistence-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用数据持久化概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-data-persistence-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"UTD预置列表","permalink":"/harmonyos-docs-site/arkdata/uniform-data-definition/uniform-data-type-list/"},"next":{"title":"通过用户首选项实现数据持久化 (ArkTS)","permalink":"/harmonyos-docs-site/arkdata/app-data-persistence/data-persistence-by-preferences/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkdata/app-data-persistence/app-data-persistence-overview/app-data-persistence-overview.md


const frontMatter = {
	title: '应用数据持久化概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-data-persistence-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '应用数据持久化概述';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
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
        id: "应用数据持久化概述",
        children: "应用数据持久化概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用数据持久化是指应用将内存中的数据通过文件或数据库的形式保存到设备上。内存中的数据形态通常是任意的数据结构或数据对象，存储介质上的数据形态可能是文本、数据库、二进制文件等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS标准系统支持典型的存储数据形态，包括用户首选项、键值型数据库和关系型数据库。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以根据如下功能介绍，选择合适的数据形态以满足自己应用数据的持久化需要。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "用户首选项（Preferences）"
          })
        }), "：用于保存应用的配置信息。数据以文本形式保存在设备中，应用使用时会将文本中的数据全量加载到内存中，访问速度快、效率高，但不适合需要存储大量数据的场景。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "键值型数据库（KV-Store）"
          })
        }), "：一种非关系型数据库，其数据以“键值”对的形式进行组织、索引和存储，其中“键”作为唯一标识符。适合数据关系和业务关系较少的业务数据存储，同时因其在分布式场景中降低了解决数据库版本兼容问题的复杂度和数据同步过程中冲突解决的复杂度而被广泛使用。相比于关系型数据库，更容易做到跨设备跨版本兼容。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "关系型数据库（RelationalStore）"
          })
        }), "：一种关系型数据库，以行和列的形式存储数据，广泛用于关系型数据处理，支持增、删、改、查等接口，开发者也可以运行自定义SQL语句满足复杂业务场景。此外，提供了向量数据库能力，支持向量数据间的相似度计算，适用于推荐场景、相似图像检索以及自然语言处理等。"]
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