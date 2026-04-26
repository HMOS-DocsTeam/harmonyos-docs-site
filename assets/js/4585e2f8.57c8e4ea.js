"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["779341"], {
18092(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_nearlink_kit_guide_nearlink_terminology_nearlink_terminology_md_458_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-nearlink-kit-guide-nearlink-terminology-nearlink-terminology-md-458.json
var site_docs_system_network_nearlink_kit_guide_nearlink_terminology_nearlink_terminology_md_458_namespaceObject = JSON.parse('{"id":"system-network/nearlink-kit-guide/nearlink-terminology/nearlink-terminology","title":"NearLink Kit术语","description":"D","source":"@site/docs/system-network/nearlink-kit-guide/nearlink-terminology/nearlink-terminology.md","sourceDirName":"system-network/nearlink-kit-guide/nearlink-terminology","slug":"/system-network/nearlink-kit-guide/nearlink-terminology/","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-terminology/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"NearLink Kit术语","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-terminology","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"NearLink Kit简介","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-introduction/"},"next":{"title":"开发准备","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-preparations/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/nearlink-kit-guide/nearlink-terminology/nearlink-terminology.md


const frontMatter = {
	title: 'NearLink Kit术语',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-terminology',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'NearLink Kit术语';

const assets = {

};



const toc = [{
  "value": "D",
  "id": "d",
  "level": 2
}, {
  "value": "Data Transfer",
  "id": "data-transfer",
  "level": 3
}, {
  "value": "S",
  "id": "s",
  "level": 2
}, {
  "value": "SSAP",
  "id": "ssap",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "nearlink-kit术语",
        children: "NearLink Kit术语"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "d",
      children: "D"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-transfer",
      children: "Data Transfer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基于应用交互端口信息管理协议，提供基于交互端口的数据传输能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "s",
      children: "S"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ssap",
      children: "SSAP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SparkLink Service Access Protocol，即星闪服务交互协议。定义了服务结构的发现过程和访问过程，以及过程中需要使用的信令。通过服务管理，星闪设备之间能够实现服务层面的互联互通。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "星闪基础服务层采用服务端-客户端交互模型，服务端提供服务能力，客户端通过 SSAP 定义的信令和流程获取、理解和访问服务端提供的服务。"
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