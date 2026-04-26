"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["310815"], {
142018(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_nearlink_kit_guide_nearlink_faq_nearlink_faq_md_b05_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-nearlink-kit-guide-nearlink-faq-nearlink-faq-md-b05.json
var site_docs_system_network_nearlink_kit_guide_nearlink_faq_nearlink_faq_md_b05_namespaceObject = JSON.parse('{"id":"system-network/nearlink-kit-guide/nearlink-faq/nearlink-faq","title":"NearLink Kit常见问题","description":"连续进行数据传输时数据发送失败的问题","source":"@site/docs/system-network/nearlink-kit-guide/nearlink-faq/nearlink-faq.md","sourceDirName":"system-network/nearlink-kit-guide/nearlink-faq","slug":"/system-network/nearlink-kit-guide/nearlink-faq/","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-faq/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"NearLink Kit常见问题","sidebar_position":9,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-faq","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用星闪传输数据","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-start-data-transfer/"},"next":{"title":"Network Kit简介","permalink":"/harmonyos-docs-site/system-network/network-kit/net-mgmt-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/nearlink-kit-guide/nearlink-faq/nearlink-faq.md


const frontMatter = {
	title: 'NearLink Kit常见问题',
	sidebar_position: 9,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-faq',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'NearLink Kit常见问题';

const assets = {

};



const toc = [{
  "value": "连续进行数据传输时数据发送失败的问题",
  "id": "连续进行数据传输时数据发送失败的问题",
  "level": 2
}, {
  "value": "星闪标准服务UUID的格式",
  "id": "星闪标准服务uuid的格式",
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
        id: "nearlink-kit常见问题",
        children: "NearLink Kit常见问题"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "连续进行数据传输时数据发送失败的问题",
      children: "连续进行数据传输时数据发送失败的问题"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["连续多次调用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/nearlink-api/nearlink-arkts/nearlink-data-transfer-api/nearlink-data-transfer-api#writedata",
        children: "writeData"
      }), "接口可能会导致发送队列拥塞，从而发送失败。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["您可以通过设置数据发送间隔来解决连续传输数据时失败的问题。使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/common-basic-arkts/js-apis-timer/js-apis-timer#setinterval",
        children: "setInterval"
      }), "设置函数调用的时间间隔，建议的数据发送时间间隔为10ms。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "星闪标准服务uuid的格式",
      children: "星闪标准服务UUID的格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通用唯一标识（UUID）用来指示条目描述的具体内容。标准服务或标准服务成员使用 16 比特通用唯一标识。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "星闪目前支持的UUID格式形如：37BEA880-FC70-11EA-B720-00000000FDEE，包含128比特。其中前112比特由基础标识决定，128比特基础标识为固定值：37BEA880-FC70-11EA-B720-000000000000；后16比特通用唯一标识指示标准服务或标准服务成员。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["标准服务或标准服务成员使用的 16 比特通用唯一标识由星闪联盟统一进行分配，具有全局的唯一性。通过标识，客户端可以明确条目承载的是某一个服务、属性、方法、事件和引用了某一个服务。详情可查阅“", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://sparklink.org.cn/trial/identCid/identListSsid",
        children: "星闪标准服务标识"
      }), "”。"]
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