"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["481682"], {
931215(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_nearlink_kit_guide_nearlink_preparations_nearlink_preparations_md_fad_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-nearlink-kit-guide-nearlink-preparations-nearlink-preparations-md-fad.json
var site_docs_system_network_nearlink_kit_guide_nearlink_preparations_nearlink_preparations_md_fad_namespaceObject = JSON.parse('{"id":"system-network/nearlink-kit-guide/nearlink-preparations/nearlink-preparations","title":"开发准备","description":"1. 请先确认设备支持星闪功能。确认方法：进入“设置 > 多设备协同”界面（不同产品或系统版本可能为“设置 > 星闪和蓝牙”），确认“星闪”选项存在。若选项不存在，则设备不支持星闪功能。","source":"@site/docs/system-network/nearlink-kit-guide/nearlink-preparations/nearlink-preparations.md","sourceDirName":"system-network/nearlink-kit-guide/nearlink-preparations","slug":"/system-network/nearlink-kit-guide/nearlink-preparations/","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-preparations/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"开发准备","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-preparations","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"NearLink Kit术语","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-terminology/"},"next":{"title":"查询星闪开关状态","permalink":"/harmonyos-docs-site/system-network/nearlink-kit-guide/nearlink-getstate/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/nearlink-kit-guide/nearlink-preparations/nearlink-preparations.md


const frontMatter = {
	title: '开发准备',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/nearlink-preparations',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = '开发准备';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    ol: "ol",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "开发准备",
        children: "开发准备"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请先确认设备支持星闪功能。确认方法：进入“设置 > 多设备协同”界面（不同产品或系统版本可能为“设置 > 星闪和蓝牙”），确认“星闪”选项存在。若选项不存在，则设备不支持星闪功能。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请参考“", (0,jsx_runtime.jsx)(_components.a, {
          href: "/application-dev-overview",
          children: "应用开发准备"
        }), "”完成开发者注册、创建应用、安装开发环境、配置签名信息等基本准备工作，再继续进行以下开发活动。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者需要在应用中动态申请星闪权限ohos.permission.ACCESS_NEARLINK，包括在应用配置文件中声明此权限，并向用户申请授权。具体申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/request-user-authorization",
          children: "向用户申请授权"
        }), "。"]
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