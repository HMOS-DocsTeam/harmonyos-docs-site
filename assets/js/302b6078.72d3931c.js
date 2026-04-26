"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["189322"], {
65734(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_telephony_kit_telephony_overview_telephony_overview_md_302_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-telephony-kit-telephony-overview-telephony-overview-md-302.json
var site_docs_system_network_telephony_kit_telephony_overview_telephony_overview_md_302_namespaceObject = JSON.parse('{"id":"system-network/telephony-kit/telephony-overview/telephony-overview","title":"Telephony Kit简介","description":"Telephony Kit（蜂窝通信服务）提供一系列API帮助开发者开发通信类应用，包括：","source":"@site/docs/system-network/telephony-kit/telephony-overview/telephony-overview.md","sourceDirName":"system-network/telephony-kit/telephony-overview","slug":"/system-network/telephony-kit/telephony-overview/","permalink":"/harmonyos-docs-site/system-network/telephony-kit/telephony-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Telephony Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/telephony-overview","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"接入跨设备互通控件后，设备选择列表没有周围设备","permalink":"/harmonyos-docs-site/system-network/service-collaboration-kit-guide/servicecollaboration-faq/servicecollaboration-faq-1/"},"next":{"title":"拨打电话","permalink":"/harmonyos-docs-site/system-network/telephony-kit/telephony-call/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/telephony-kit/telephony-overview/telephony-overview.md


const frontMatter = {
	title: 'Telephony Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/telephony-overview',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'Telephony Kit简介';

const assets = {

};



const toc = [{
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
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "telephony-kit简介",
        children: "Telephony Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Telephony Kit（蜂窝通信服务）提供一系列API帮助开发者开发通信类应用，包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["call模块（拨打电话）：系统应用可以直接拨打电话，在应用界面显示通话；三方应用可以拉起系统电话应用，跳转至拨号界面，从而实现拨打电话的功能，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-network/telephony-kit/telephony-call",
          children: "拨打电话开发指导"
        }), "。除此之外，应用还可以通过call模块，实现格式化电话号码、判断是否紧急号码等功能，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/telephony-api/telephony-arkts/js-apis-call/js-apis-call",
          children: "@ohos.telephony.call (拨打电话)"
        }), "文档。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["sms模块（短信服务）：应用可以实现创建、发送短信消息的功能，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-network/telephony-kit/telephony-sms",
          children: "发送短信开发指导"
        }), "。除此之外，应用还可以实现获取、设置短信服务中心地址，和检查当前设备是否具备短信发送和接收能力等功能，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/telephony-api/telephony-arkts/js-apis-sms/js-apis-sms",
          children: "@ohos.telephony.sms (短信服务)"
        }), "文档。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["radio模块（网络搜索）：应用可以调用API获取当前注册网络名称、网络服务状态以及信号强度相关信息，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/telephony-api/telephony-arkts/js-apis-radio/js-apis-radio",
          children: "@ohos.telephony.radio (网络搜索)"
        }), "文档。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["data模块（蜂窝数据）：蜂窝数据是无线通信技术标准的一种，从数据的传输到交换都采用分组技术（Packet Switch），能够为移动设备提供话音、数据、视频图像等业务，经常用于支持用户在智能设备上使用应用程序，以及在移动网络上浏览网页，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/telephony-api/telephony-arkts/js-apis-telephony-data/js-apis-telephony-data",
          children: "@ohos.telephony.data (蜂窝数据)"
        }), "文档。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["sim模块（SIM卡管理）：应用可以调用API获取SIM卡相关信息，如服务提供商、ISO（International Organization for Standardization，国际标准化组织）国家码、归属PLMN（Public Land Mobile Network，公共陆地移动网络）号等，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/telephony-api/telephony-arkts/js-apis-sim/js-apis-sim",
          children: "@ohos.telephony.sim (SIM卡管理)"
        }), "文档。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["esim模块（eSIM卡管理）：穿戴设备支持eSIM，电话服务提供API给eSIM卡管理和eSIM卡服务使用等，详情请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/system-network-api/telephony-api/telephony-arkts/js-apis-esim/js-apis-esim",
          children: "@ohos.telephony.esim (eSIM卡管理)"
        }), "文档。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在调用电话服务API前，请确保使用的硬件设备有可以独立蜂窝通信的Modem和SIM卡。"
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