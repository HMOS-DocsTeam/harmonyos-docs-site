"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["881511"], {
906411(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_basicfun_basic_services_kit_update_sample_server_overview_sample_server_overview_md_23d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-basicfun-basic-services-kit-update-sample-server-overview-sample-server-overview-md-23d.json
var site_docs_system_basicfun_basic_services_kit_update_sample_server_overview_sample_server_overview_md_23d_namespaceObject = JSON.parse('{"id":"system-basicfun/basic-services-kit/update/sample-server-overview/sample-server-overview","title":"示例服务器开发概述","description":"示例服务器提供一个简易的升级包部署的服务器实例参考，用于搭建升级服务子系统的辅助验证环境。","source":"@site/docs/system-basicfun/basic-services-kit/update/sample-server-overview/sample-server-overview.md","sourceDirName":"system-basicfun/basic-services-kit/update/sample-server-overview","slug":"/system-basicfun/basic-services-kit/update/sample-server-overview/","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/update/sample-server-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"示例服务器开发概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sample-server-overview","kit":"system/basic-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"USB服务开发术语","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/usb/usb-glossary/"},"next":{"title":"示例服务器开发指导","permalink":"/harmonyos-docs-site/system-basicfun/basic-services-kit/update/sample-server-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-basicfun/basic-services-kit/update/sample-server-overview/sample-server-overview.md


const frontMatter = {
	title: '示例服务器开发概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sample-server-overview',
	kit: 'system/basic-services',
	last_updated: '2026-04-22'
};
const contentTitle = '示例服务器开发概述';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "示例服务器开发概述",
        children: "示例服务器开发概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例服务器提供一个简易的升级包部署的服务器实例参考，用于搭建升级服务子系统的辅助验证环境。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者在实际应用中，需要服务器提供升级包的查询、下载等能力。示例服务器为开发者提供了如下能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "升级包的查询：服务器返回升级包的版本信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "升级包的下载：服务器返回升级包的下载链接。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例服务器支持测试升级服务和二次开发功能验证，为升级服务的应用场景提供尽可能完善的端到端环境搭建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "搜包服务：升级服务（UpdateService）提供的服务能力之一，依赖支持TCP和SSL协议的服务器。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "搜包服务器：即支持搜包服务的通过TCP连接并支持SSL协议的服务器，本概述提及的升级服务示例服务器即是符合要求的搜包服务器之一。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "下载服务器：普通的HTTP服务器即可满足下载服务器的要求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "update.serverip.search：系统参数，指升级服务（UpdateService）侧配置的搜包服务器IP地址，默认值：127.0.0.1。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "服务器返回报文格式json示例，注意verifyInfo字段是升级包的sha256值，size字段是升级包的大小，单位为字节。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"searchStatus\": 0,\n    \"errMsg\": \"success\",\n    \"checkResults\": [{\n        \"versionName\": \"versionNameSample\",\n        \"versionCode\": \"versionCodeSample\",\n        \"verifyInfo\": \"verifyInfoSHA256Value1234567\",\n        \"size\": 1234567,\n        \"packageType\": 1,\n        \"url\": \"http://serverAddressSample/packageNameSample.fileTypeSample\",\n        \"descriptPackageId\": \"abcdefg1234567ABCDEFG\"\n    }],\n    \"descriptInfo\": [{\n        \"descriptionType\": 0,\n        \"content\": \"This package is used for update.\"\n    }]\n}\n"
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