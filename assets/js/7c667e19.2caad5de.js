"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["223368"], {
992210(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_connectivity_kit_wlan_wlan_overview_wlan_overview_md_7c6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-connectivity-kit-wlan-wlan-overview-wlan-overview-md-7c6.json
var site_docs_system_network_connectivity_kit_wlan_wlan_overview_wlan_overview_md_7c6_namespaceObject = JSON.parse('{"id":"system-network/connectivity-kit/wlan/wlan-overview/wlan-overview","title":"WLAN服务开发概述","description":"概述","source":"@site/docs/system-network/connectivity-kit/wlan/wlan-overview/wlan-overview.md","sourceDirName":"system-network/connectivity-kit/wlan/wlan-overview","slug":"/system-network/connectivity-kit/wlan/wlan-overview/","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/wlan/wlan-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"WLAN服务开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wlan-overview","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"安全单元访问开发指南","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/nfc/nfc-se-access-guide/"},"next":{"title":"P2P模式开发指南","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/wlan/p2p-development-guide/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/connectivity-kit/wlan/wlan-overview/wlan-overview.md


const frontMatter = {
	title: 'WLAN服务开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/wlan-overview',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'WLAN服务开发概述';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "实现原理",
  "id": "实现原理",
  "level": 2
}, {
  "value": "模式介绍",
  "id": "模式介绍",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "wlan服务开发概述",
        children: "WLAN服务开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "无线局域网（Wireless Local Area Networks，WLAN），是通过无线电、红外光信号或者其他技术发送和接收数据的局域网，用户可以通过WLAN实现节点之间无物理连接的网络通讯。常用于用户携带可移动终端的办公、公众环境中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wi-Fi（Wireless Fidelity），是一种基于无线电波的通信技术，用于设备之间传输数据，使得用户可以无需使用有线连接即可访问互联网和共享数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WLAN系统为用户提供接入WLAN网络功能（STA模式）、点对点的数据传输功能（P2P模式）和热点分享功能（AP模式），让应用可以通过WLAN和其他设备互联互通。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "实现原理",
      children: "实现原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WLAN的实现原理是通过无线电磁波在空间中传输信息，当前使用的频段是2.4GHz或者5GHz频段。WLAN网络架构分有线侧和无线侧两部分，有线侧是指AP上行到Internet的网络使用以太网协议，无线侧是指STA到AP之间的网络，使用802.11协议。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模式介绍",
      children: "模式介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["STA模式（工作站模式）：STA模式即工作站模式，可以理解为某网络中的一个工作站即客户端。当某设备具备该功能时，它可以连到另外的一个路由网络中，如家用路由器，通常用于提供网络的数据上行服务。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-wifimanager/js-apis-wifimanager",
          children: "@ohos.wifiManager (WLAN)"
        }), "文档。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["P2P模式（Wi-Fi直连）：P2P模式也为Wi-Fi Direct；Wi-Fi Direct 是一种点对点连接技术，它可以在两台 STA 之间直接建立 TCP/IP 链接，并不需要AP的参与；其中一台STA会起到传统意义上的AP的作用，称为Group Owner(GO)，另外一台station则称为Group Client(GC)，像连接AP一样连接到GO。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-wifimanager/js-apis-wifimanager",
          children: "@ohos.wifiManager (WLAN)"
        }), "文档。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["AP模式（热点模式）：AP模式为加入无线局域网的成员设备（即客户端）提供下行数据业务，它提供以无线方式组建无线局域网WLAN，相当于WLAN的中心设备。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/connectivity-api/connectivity-arkts/js-apis-wifimanager/js-apis-wifimanager",
          children: "@ohos.wifiManager (WLAN)"
        }), "文档。"]
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