"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["95309"], {
316878(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_network_boost_kit_guide_networkboost_netmultipathguide_networkboost_netmultipath_overview_networkboost_netmultipath_overview_md_d1a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-network-boost-kit-guide-networkboost-netmultipathguide-networkboost-netmultipath-overview-networkboost-netmultipath-overview-md-d1a.json
var site_docs_system_network_network_boost_kit_guide_networkboost_netmultipathguide_networkboost_netmultipath_overview_networkboost_netmultipath_overview_md_d1a_namespaceObject = JSON.parse('{"id":"system-network/network-boost-kit-guide/networkboost-netmultipathguide/networkboost-netmultipath-overview/networkboost-netmultipath-overview","title":"概述","description":"从6.0.0(20)版本开始，支持连接迁移（多网并发）功能。","source":"@site/docs/system-network/network-boost-kit-guide/networkboost-netmultipathguide/networkboost-netmultipath-overview/networkboost-netmultipath-overview.md","sourceDirName":"system-network/network-boost-kit-guide/networkboost-netmultipathguide/networkboost-netmultipath-overview","slug":"/system-network/network-boost-kit-guide/networkboost-netmultipathguide/networkboost-netmultipath-overview/","permalink":"/harmonyos-docs-site/system-network/network-boost-kit-guide/networkboost-netmultipathguide/networkboost-netmultipath-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-netmultipath-overview","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"迁移模式设置","permalink":"/harmonyos-docs-site/system-network/network-boost-kit-guide/networkboost-nethandoverguide/networkboost-reporthandovermode/"},"next":{"title":"业务场景设置","permalink":"/harmonyos-docs-site/system-network/network-boost-kit-guide/networkboost-netmultipathguide/networkboost-netmultipath-setscenedesc/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/network-boost-kit-guide/networkboost-netmultipathguide/networkboost-netmultipath-overview/networkboost-netmultipath-overview.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/networkboost-netmultipath-overview',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '概述';

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
        id: "概述",
        children: "概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.0(20)版本开始，支持连接迁移（多网并发）功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多网并发是系统提供接口可以建立多个网络通路，应用发起多网请求后，系统依据业务场景决定并发组合和实施相应的并发管控，并对并发做收益度量。使用多网并发功能的原则是应用申请（受限权限）、系统管控、最小化使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(543151)/* ["default"] */.A) + "",
        width: "666",
        height: "562"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中各步骤功能如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听并发：应用监听多网状态通知获得状态变更信息；同时网络子系统会给出多网拉起和释放等建议措施。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查询配额：应用获取多网并发配额信息(已使用和剩余的多网次数和时长)，自主实现合理使用多网并发能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动并发：应用启动多网并发前，可主动调用业务场景设置接口，告知系统进入特定业务场景，并通过显式的多网发起接口来触发多网并发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网卡绑定：在多网状态监听接口中，应用获取的新网卡，按socket或按应用来绑定。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "终止多网：当应用体验恢复时需主动释放多网，并根据应用实际业务，调用业务场景设置接口，告知系统退出特定业务场景，同时系统也会因管控而主动释放多网，以确保多网不被滥用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "收益度量：根据APP传输体验反馈信息和系统Qoe算法，查看系统计算和应用反馈的一致性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注：多网并发能力受网络加速开关、权限、配额、功耗等方面管控，同时针对不规范的行为将进行惩罚，包括但不限于并发终止、配额降低、受限权限吊销等。"
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
543151(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798780-3564af5d227d7d3eaa986006d365abed.png");

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