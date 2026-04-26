"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["333006"], {
694917(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_security_kit_guide_devicesecurity_prepare_devicesecurity_prepare_declarepermissions_devicesecurity_prepare_declarepermissions_md_aa8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-security-kit-guide-devicesecurity-prepare-devicesecurity-prepare-declarepermissions-devicesecurity-prepare-declarepermissions-md-aa8.json
var site_docs_system_security_device_security_kit_guide_devicesecurity_prepare_devicesecurity_prepare_declarepermissions_devicesecurity_prepare_declarepermissions_md_aa8_namespaceObject = JSON.parse('{"id":"system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-prepare-declarepermissions/devicesecurity-prepare-declarepermissions","title":"（可选）申请使用受限权限","description":"- 在开发反诈类应用时，若需实现举报消息功能，应用需要使用诈骗消息选择器来获取相关消息信息。在使用诈骗消息选择器前，需要申请权限：ohos.permission.USE\\\\FRAUD\\\\MESSAGES\\\\_PICKER。申请方式请参考：申请使用受限权限","source":"@site/docs/system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-prepare-declarepermissions/devicesecurity-prepare-declarepermissions.md","sourceDirName":"system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-prepare-declarepermissions","slug":"/system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-prepare-declarepermissions/","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-prepare-declarepermissions/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"（可选）申请使用受限权限","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-prepare-declarepermissions","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"基于服务账号生成鉴权令牌","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-deviceverify-token/"},"next":{"title":"应用设备状态检测","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-deviceverify-develop/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-prepare-declarepermissions/devicesecurity-prepare-declarepermissions.md


const frontMatter = {
	title: '（可选）申请使用受限权限',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-prepare-declarepermissions',
	kit: 'system/security',
	last_updated: '2026-04-22'
};
const contentTitle = '（可选）申请使用受限权限';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "可选申请使用受限权限",
        children: "（可选）申请使用受限权限"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在开发反诈类应用时，若需实现举报消息功能，应用需要使用诈骗消息选择器来获取相关消息信息。在使用诈骗消息选择器前，需要申请权限：ohos.permission.USE_FRAUD_MESSAGES_PICKER。申请方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
          children: "申请使用受限权限"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在开发反诈类应用时，若需实现举报通话功能，应用需要使用诈骗通话记录选择器来获取相关通话记录信息。在使用诈骗通话记录选择器前，需要申请权限：ohos.permission.USE_FRAUD_CALL_LOG_PICKER。申请方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
          children: "申请使用受限权限"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["在开发反诈类应用时，若需实现举报应用功能，应用需要使用诈骗应用选择器来获取相关应用信息。在使用诈骗应用选择器前，需要申请权限：ohos.permission.USE_FRAUD_APP_PICKER。申请方式请参考：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
          children: "申请使用受限权限"
        })]
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