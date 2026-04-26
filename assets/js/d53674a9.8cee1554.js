"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["888875"], {
580744(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_screen_time_guard_kit_guide_screentimeguard_interface_call_auth_screentimeguard_interface_call_auth_overview_screentimeguard_interface_call_auth_overview_md_d53_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-screen-time-guard-kit-guide-screentimeguard-interface-call-auth-screentimeguard-interface-call-auth-overview-screentimeguard-interface-call-auth-overview-md-d53.json
var site_docs_screen_time_guard_kit_guide_screentimeguard_interface_call_auth_screentimeguard_interface_call_auth_overview_screentimeguard_interface_call_auth_overview_md_d53_namespaceObject = JSON.parse('{"id":"screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-interface-call-auth-overview/screentimeguard-interface-call-auth-overview","title":"概述","description":"Screen Time Guard Kit需要经过用户授权才能对用户设备做时间管控和应用限制。Screen Time Guard Kit提供了请求用户授权和取消授权的接口，并且在健康使用设备的授权列表页面中，提供了用户主动打开/关闭授权的入口。开发者也可通过实现指定ExtensionAbility的回调方法，感知用户在健康使用设备的授权列表页中打开/关闭授权的行为。","source":"@site/docs/screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-interface-call-auth-overview/screentimeguard-interface-call-auth-overview.md","sourceDirName":"screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-interface-call-auth-overview","slug":"/screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-interface-call-auth-overview/","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-interface-call-auth-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-interface-call-auth-overview","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"受限ACL权限申请","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-preparations/screentimeguard-permission-application/"},"next":{"title":"请求用户授权","permalink":"/harmonyos-docs-site/screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-request-user-auth/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/screen-time-guard-kit-guide/screentimeguard-interface-call-auth/screentimeguard-interface-call-auth-overview/screentimeguard-interface-call-auth-overview.md


const frontMatter = {
	title: '概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/screentimeguard-interface-call-auth-overview',
	kit: 'app-services',
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
      children: "Screen Time Guard Kit需要经过用户授权才能对用户设备做时间管控和应用限制。Screen Time Guard Kit提供了请求用户授权和取消授权的接口，并且在健康使用设备的授权列表页面中，提供了用户主动打开/关闭授权的入口。开发者也可通过实现指定ExtensionAbility的回调方法，感知用户在健康使用设备的授权列表页中打开/关闭授权的行为。"
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