"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["752258"], {
231581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_distributed_service_kit_distributedservice_kit_intro_distributedservice_kit_intro_md_070_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-distributed-service-kit-distributedservice-kit-intro-distributedservice-kit-intro-md-070.json
var site_docs_system_network_distributed_service_kit_distributedservice_kit_intro_distributedservice_kit_intro_md_070_namespaceObject = JSON.parse('{"id":"system-network/distributed-service-kit/distributedservice-kit-intro/distributedservice-kit-intro","title":"Distributed Service Kit简介","description":"Distributed Service Kit（分布式管理服务）实现了分布式设备管理、分布式硬件管理、分布式键鼠穿越、分布式组件管理等能力。","source":"@site/docs/system-network/distributed-service-kit/distributedservice-kit-intro/distributedservice-kit-intro.md","sourceDirName":"system-network/distributed-service-kit/distributedservice-kit-intro","slug":"/system-network/distributed-service-kit/distributedservice-kit-intro/","permalink":"/harmonyos-docs-site/system-network/distributed-service-kit/distributedservice-kit-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Distributed Service Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/distributedservice-kit-intro","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Connectivity Kit术语","permalink":"/harmonyos-docs-site/system-network/connectivity-kit/terminology/"},"next":{"title":"分布式设备管理开发指南","permalink":"/harmonyos-docs-site/system-network/distributed-service-kit/devicemanager-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/distributed-service-kit/distributedservice-kit-intro/distributedservice-kit-intro.md


const frontMatter = {
	title: 'Distributed Service Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/distributedservice-kit-intro',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'Distributed Service Kit简介';

const assets = {

};



const toc = [{
  "value": "运作机制",
  "id": "运作机制",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
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
        id: "distributed-service-kit简介",
        children: "Distributed Service Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Distributed Service Kit（分布式管理服务）实现了分布式设备管理、分布式硬件管理、分布式键鼠穿越、分布式组件管理等能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用开发者可以通过分布式设备管理进行周边设备的发现、认证、信息查询、状态监听等，该能力是分布式业务的入口功能，即只有完成认证后的设备之间才可以进行分布式业务。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-network/distributed-service-kit/abilityconnect-distributed/abilityconnectmanager-guidelines",
        children: "跨设备连接UIAbility开发指南"
      }), "实现应用间协同。设备间登录同账号并组网成功后，应用可以跨设备拉起同应用的一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-uiability/js-apis-app-ability-uiability",
        children: "UIAbility"
      }), "，从而实现信息、字节流、图片和传输流的交互。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "运作机制",
      children: "运作机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分布式设备管理能力作为系统为应用提供的一种基础服务，需要应用在所使用的业务场景，向系统主动发起请求，完成设备间的发现、认证、查询、监听等功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用分布式设备管理，需要用户进行相关权限的申请。"
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